import { NextResponse } from "next/server";

/**
 * Contact enquiry endpoint.
 *
 * Server-side only: RESEND_API_KEY is read here and never sent to the client.
 * Delivered via the Resend REST API over fetch rather than the `resend` SDK, so
 * there is no extra dependency and no Node-only runtime requirement.
 */

export const runtime = "nodejs";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/**
 * Where enquiries are delivered. Defaults to the address already published
 * across the site (hero, footer, about and contact pages all link to it), and
 * can be overridden per environment without a code change.
 */
const DEFAULT_TO = "growth.scalechefs@gmail.com";

/**
 * Resend can only send from a domain you have verified. `onboarding@resend.dev`
 * is Resend's sandbox sender: it works immediately but only delivers to the
 * address on the Resend account, so set CONTACT_FROM_EMAIL to a verified domain
 * before going live.
 */
const FALLBACK_FROM = "onboarding@resend.dev";

const MAX_NAME = 120;
const MAX_COMPANY = 120;
const MAX_SERVICE = 120;
const MAX_MESSAGE = 5000;
const MAX_EMAIL_ADDR = 254;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Strip control characters and collapse CR/LF, which must never reach headers. */
function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, max);
}

/** Best-effort per-IP throttle. In-process only, so it resets on cold start. */
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function throttled(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Email delivery is not configured yet." },
      { status: 503 },
    );
  }

  const to = clean(process.env.CONTACT_TO_EMAIL, MAX_EMAIL_ADDR) || DEFAULT_TO;
  const from = clean(process.env.CONTACT_FROM_EMAIL, MAX_EMAIL_ADDR) || FALLBACK_FROM;

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (throttled(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts. Please try again in a minute." },
      { status: 429 },
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  const name = clean(payload.name, MAX_NAME);
  const email = clean(payload.email, MAX_EMAIL_ADDR);
  const company = clean(payload.company, MAX_COMPANY);
  const service = clean(payload.service, MAX_SERVICE);
  const message = clean(payload.message, MAX_MESSAGE);

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Please check the form.", fields: errors }, { status: 400 });
  }

  const escapeHtml = (v: string) =>
    v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Service", service || "—"],
  ];

  const textBody = [
    "New website enquiry",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1D1D1F">
      <h2 style="margin:0 0 16px">New website enquiry</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;font-weight:700;color:#6B6B72">${escapeHtml(k)}</td>` +
              `<td style="padding:4px 0">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <div style="white-space:pre-wrap;background:#F5F5F7;border-radius:10px;padding:16px">${escapeHtml(message)}</div>
      <p style="margin-top:20px;color:#6B6B72;font-size:13px">Reply directly to this email to reach ${escapeHtml(name)}.</p>
    </div>`;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New Website Enquiry - ${name}`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      // Logged server-side only; the client gets a generic message.
      console.error(`[contact] Resend rejected the send (${res.status}):`, detail.slice(0, 500));
      return NextResponse.json(
        { ok: false, error: "We couldn't send that just now. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Resend request failed:", error);
    return NextResponse.json(
      { ok: false, error: "We couldn't send that just now. Please email us directly." },
      { status: 502 },
    );
  }
}