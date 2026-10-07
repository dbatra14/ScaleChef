import TeamShowcase from "@/components/ui/team-showcase";
import Navbar from "@/components/navbar";
import ContactForm from "../contact/contact-form";
import Link from "next/link";

export const metadata = {
  title: "About Us — ScaleChefs",
  description: "Meet the ScaleChefs team — technology, marketing and AI, built to scale ambitious businesses.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO - keep existing, add culture beat as sharp sentence */}
      <section className="border-b border-[rgba(29,29,31,0.10)] bg-gradient-to-b from-[#DCF8E8] to-white px-[4.2vw] py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] inline-block rounded bg-[#9BE6BE] px-2 py-1 text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>About Us</p>
          <h1 className="mt-3 max-w-3xl text-[36px] font-normal leading-[1.1] tracking-tight md:text-[56px]" style={{ fontFamily: "Prata, Georgia, serif" }}>
            Small team. <span className="rounded bg-[#9BE6BE] px-1.5 text-[#1D1D1F]">Big scale</span> mindset.
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-6 text-[#6B6B72]">
            We operate like your on-demand growth kitchen — lean, fast, and obsessed with outcomes. Four people around one table, no account managers, no 40-slide decks, just whatever it takes to ship.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:growth.scalechefs@gmail.com" className="bg-[#19B86A] px-6 py-3 text-[13px] font-semibold text-[#1D1D1F] hover:bg-[#9BE6BE]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Join our journey ↗</a>
            <Link href="#contact" className="border border-[#1D1D1F] px-6 py-3 text-[13px] font-semibold hover:bg-[#1D1D1F] hover:text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* 1. STATS BAR - keep green numbers/dark cards, add 2 specific metrics, varied 5-up that breaks on mobile */}
      <section className="border-b border-[rgba(29,29,31,0.10)] bg-[#DCF8E8] px-[4.2vw] py-8 md:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            <div className="rounded-2xl border border-[#19B86A]/15 bg-white p-5 text-center">
              <div className="text-[28px] font-normal leading-none text-[#1D1D1F]" style={{ fontFamily: "Prata, Georgia, serif" }}>60+</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-[#6B6B72]">Projects shipped</div>
            </div>
            <div className="rounded-2xl border border-[#19B86A]/15 bg-white p-5 text-center">
              <div className="text-[28px] font-normal leading-none text-[#1D1D1F]" style={{ fontFamily: "Prata, Georgia, serif" }}>3.4×</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-[#6B6B72]">Avg. momentum lift</div>
            </div>
            <div className="rounded-2xl border border-[#19B86A]/15 bg-white p-5 text-center">
              <div className="text-[28px] font-normal leading-none text-[#1D1D1F]" style={{ fontFamily: "Prata, Georgia, serif" }}>95%</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-[#6B6B72]">Client retention</div>
            </div>
            <div className="rounded-2xl border border-[#1D1D1F] bg-[#1D1D1F] p-5 text-center">
              <div className="text-[22px] font-normal leading-none text-white" style={{ fontFamily: "Prata, Georgia, serif" }}>4<span className="text-[#19B86A]">/</span>0</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/60">people / middle management</div>
            </div>
            <div className="col-span-2 md:col-span-1 rounded-2xl border border-[#19B86A]/15 bg-white p-5 text-center">
              <div className="text-[22px] font-normal leading-none text-[#1D1D1F]" style={{ fontFamily: "Prata, Georgia, serif" }}>14 days</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-[#6B6B72]">avg. time-to-first-ship</div>
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] italic text-[#6B6B72]">We count days to ship, not hours billed.</p>
        </div>
      </section>

      {/* 2. THE MENU - full-bleed, menu-card, numbered courses, one green divider between courses */}
      <section className="bg-white px-[4.2vw] py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[360px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] inline-block rounded bg-[#9BE6BE] px-2 py-1 text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>The Menu</p>
              <h2 className="mt-3 text-[32px] font-normal leading-[1.1] tracking-tight md:text-[40px]" style={{ fontFamily: "Prata, Georgia, serif" }}>We don&apos;t do<br />a la carte chaos.</h2>
              <p className="mt-4 text-[14px] leading-6 text-[#6B6B72]">Pick a course. We fire the right station — no upsells, no handoffs to a B-team you&apos;ve never met.</p>
            </div>

            <div className="flex-1 max-w-[640px] rounded-[20px] border border-[rgba(29,29,31,0.11)] bg-[#F5F5F7] p-6 md:p-8">
              {/* Course 01 - Build */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.16em] rounded bg-[#9BE6BE] px-1.5 py-0.5 text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>01 — BUILD</span>
                  <span className="h-[1px] flex-1 bg-[#B7B7BA]"></span>
                  <span className="text-[10px] text-[#6B6B72]">2 dishes</span>
                </div>
                <div className="mt-4 grid gap-5 md:grid-cols-2">
                  <div>
                    <div className="text-[12px] font-semibold tracking-wide" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Website Development</div>
                    <div className="mt-1 text-[12px] leading-4 text-[#6B6B72]">Next.js, not WordPress bandaids. Ships fast, stays fast.</div>
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold tracking-wide" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Software Development and Custom Tech Solutions</div>
                    <div className="mt-1 text-[12px] leading-4 text-[#6B6B72]">Internal tools and integrations your ops team will actually use.</div>
                  </div>
                </div>
              </div>

              <div className="my-6 h-[1px] bg-[#19B86A]"></div>

              {/* Course 02 - Run */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.16em] rounded bg-[#9BE6BE] px-1.5 py-0.5 text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>02 — RUN</span>
                  <span className="h-[1px] flex-1 bg-[#B7B7BA]"></span>
                  <span className="text-[10px] text-[#6B6B72]">2 dishes</span>
                </div>
                <div className="mt-4 grid gap-5 md:grid-cols-2">
                  <div>
                    <div className="text-[12px] font-semibold tracking-wide" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Technology AMC Management</div>
                    <div className="mt-1 text-[12px] leading-4 text-[#6B6B72]">Website and software management — monitored, patched, always on.</div>
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold tracking-wide" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Branding and UI/UX Designing</div>
                    <div className="mt-1 text-[12px] leading-4 text-[#6B6B72]">Identity and interface design that devs don&apos;t hate to build.</div>
                  </div>
                </div>
              </div>

              <div className="my-6 h-[1px] bg-[#19B86A]/30"></div>

              {/* Course 03 - Think */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.16em] rounded bg-[#9BE6BE] px-1.5 py-0.5 text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>03 — THINK</span>
                  <span className="h-[1px] flex-1 bg-[#B7B7BA]"></span>
                  <span className="text-[10px] text-[#6B6B72]">1 dish</span>
                </div>
                <div className="mt-4 flex gap-4">
                  <div className="max-w-[320px]">
                    <div className="text-[12px] font-semibold tracking-wide" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>AI Solutions</div>
                    <div className="mt-1 text-[12px] leading-4 text-[#6B6B72]">We wire AI into your kitchen — not as a demo, as daily prep.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW A PROJECT GETS COOKED - horizontal strip, per-step connectors, numerals, under 10-word one-liners */}
      <section className="border-y border-[rgba(29,29,31,0.10)] bg-[#1D1D1F] px-[4.2vw] py-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9BE6BE]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>How a project gets cooked</p>
          <div className="mt-8 grid gap-8 md:grid-cols-4">
            <div className="relative">
              <span aria-hidden="true" className="absolute left-[18px] right-[-14px] top-[18px] hidden h-[1px] bg-white/15 md:block"></span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#1D1D1F] text-[11px] font-semibold text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>01</div>
              <div className="mt-3 text-[13px] font-semibold text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Mise en place</div>
              <div className="mt-1 text-[12px] leading-4 text-white/60">Goals, scope and the real constraint, nailed in one call.</div>
            </div>
            <div className="relative">
              <span aria-hidden="true" className="absolute left-[18px] right-[-14px] top-[18px] hidden h-[1px] bg-white/15 md:block"></span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#1D1D1F] text-[11px] font-semibold text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>02</div>
              <div className="mt-3 text-[13px] font-semibold text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>The Recipe</div>
              <div className="mt-1 text-[12px] leading-4 text-white/60">Fixed scope, fixed price, 14 days to first ship.</div>
            </div>
            <div className="relative">
              <span aria-hidden="true" className="absolute left-[18px] right-[-14px] top-[18px] hidden h-[1px] bg-white/15 md:block"></span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#19B86A] text-[11px] font-semibold text-[#1D1D1F]" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>03</div>
              <div className="mt-3 text-[13px] font-semibold text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Fire</div>
              <div className="mt-1 text-[12px] leading-4 text-white/60">Sprint hard, daily demos, progress you can click.</div>
            </div>
            <div className="relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#1D1D1F] text-[11px] font-semibold text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>04</div>
              <div className="mt-3 text-[13px] font-semibold text-white" style={{ fontFamily: "Montserrat, Arial, sans-serif" }}>Season to taste</div>
              <div className="mt-1 text-[12px] leading-4 text-white/60">Launch, then we stay on as your AMC.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet the crew - keep as-is, dark */}
      <section className="dark bg-[#1D1D1F] px-[4.2vw] py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-[24px] font-normal tracking-tight text-white md:text-[28px]" style={{ fontFamily: "Prata, Georgia, serif" }}>Meet the crew</h2>
            <p className="mt-2 text-[14px] leading-6 text-[#B7B7BA]">The people behind ScaleChefs — technology, marketing and AI, built to scale ambitious businesses.</p>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-[#1D1D1F] p-2 md:p-6">
            <TeamShowcase />
          </div>
        </div>
      </section>

      {/* 6. CONTACT - same pattern as the homepage section */}
      <section className="section contact-section" id="contact">
        <div className="contact-section-grid">
          <div className="section-head">
            <span className="section-kicker">Contact</span>
            <h2>Let&rsquo;s cook something great.</h2>
            <p>
              Tell us about your project, goals and timeline. We reply within 24h
              &mdash; no pitch deck required.
            </p>
            <ul className="contact-section-list">
              <li>
                <a href="mailto:growth.scalechefs@gmail.com">growth.scalechefs@gmail.com</a>
              </li>
              <li>
                <a
                  href="https://wa.me/918860822800?text=Hello%20ScaleChefs%20team%21%20I%27m%20interested%20in%20your%20services%20and%20would%20love%20to%20know%20more.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp us directly
                </a>
              </li>
              <li className="contact-section-meta">India &middot; Worldwide</li>
            </ul>
          </div>

          <div className="contact-section-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
