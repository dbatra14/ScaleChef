import TeamShowcase from "@/components/ui/team-showcase";
import Navbar from "@/components/navbar";
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
      <section className="border-b border-black/10 bg-gradient-to-b from-[#DCF8E8] to-white px-[4.2vw] py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#19B86A]" style={{ fontFamily: "Inter, sans-serif" }}>04 — About Us</p>
          <h1 className="mt-3 max-w-3xl text-[36px] font-bold leading-[0.95] tracking-tight md:text-[56px]" style={{ fontFamily: "Inter, sans-serif" }}>
            Small team. <span className="text-[#19B86A]">Big scale</span> mindset.
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-6 text-zinc-600">
            We operate like your on-demand growth kitchen — lean, fast, and obsessed with outcomes. Six people around one table, no account managers, no 40-slide decks, just whatever it takes to ship.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:hello@scalechefs.com" className="bg-[#19B86A] px-6 py-3 text-[13px] font-bold text-white hover:bg-[#109556]" style={{ fontFamily: "Inter, sans-serif" }}>Join our journey ↗</a>
            <Link href="/#contact" className="border border-zinc-900 px-6 py-3 text-[13px] font-bold hover:bg-zinc-900 hover:text-white" style={{ fontFamily: "Inter, sans-serif" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* 1. STATS BAR - keep green numbers/dark cards, add 2 specific metrics, varied 5-up that breaks on mobile */}
      <section className="border-b border-black/10 bg-[#EEFAF3] px-[4.2vw] py-8 md:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            <div className="rounded-2xl border border-[#19B86A]/15 bg-white p-5 text-center">
              <div className="text-[28px] font-bold leading-none text-[#19B86A]" style={{ fontFamily: "Inter, sans-serif" }}>50+</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500">Projects shipped</div>
            </div>
            <div className="rounded-2xl border border-[#19B86A]/15 bg-white p-5 text-center">
              <div className="text-[28px] font-bold leading-none text-[#19B86A]" style={{ fontFamily: "Inter, sans-serif" }}>3.4×</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500">Avg. momentum lift</div>
            </div>
            <div className="rounded-2xl border border-[#19B86A]/15 bg-white p-5 text-center">
              <div className="text-[28px] font-bold leading-none text-[#19B86A]" style={{ fontFamily: "Inter, sans-serif" }}>98%</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500">Client retention</div>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-[#1D1D1F] p-5 text-center">
              <div className="text-[22px] font-bold leading-none text-white" style={{ fontFamily: "Inter, sans-serif" }}>6<span className="text-[#19B86A]">/</span>0</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/60">people / middle management</div>
            </div>
            <div className="col-span-2 md:col-span-1 rounded-2xl border border-[#19B86A]/15 bg-white p-5 text-center">
              <div className="text-[22px] font-bold leading-none text-[#19B86A]" style={{ fontFamily: "Inter, sans-serif" }}>14 days</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500">avg. time-to-first-ship</div>
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] italic text-zinc-500">We count days to ship, not hours billed.</p>
        </div>
      </section>

      {/* 2. THE MENU - full-bleed, menu-card, numbered courses, one green divider between courses */}
      <section className="bg-white px-[4.2vw] py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[360px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#19B86A]" style={{ fontFamily: "Inter, sans-serif" }}>02 — The Menu</p>
              <h2 className="mt-3 text-[32px] font-bold leading-[0.9] tracking-tight md:text-[40px]" style={{ fontFamily: "Inter, sans-serif" }}>We don&apos;t do<br />a la carte chaos.</h2>
              <p className="mt-4 text-[14px] leading-6 text-zinc-600">Pick a course. We fire the right station — no upsells, no handoffs to a B-team you&apos;ve never met.</p>
            </div>

            <div className="flex-1 max-w-[640px] rounded-[20px] border border-zinc-200 bg-[#FFFCF8] p-6 md:p-8">
              {/* Course 01 - Build */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#19B86A]" style={{ fontFamily: "Inter, sans-serif" }}>01 — BUILD</span>
                  <span className="h-[1px] flex-1 bg-zinc-200"></span>
                  <span className="text-[10px] text-zinc-400">3 dishes</span>
                </div>
                <div className="mt-4 grid gap-5 md:grid-cols-3">
                  <div>
                    <div className="text-[12px] font-bold tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>Web Development</div>
                    <div className="mt-1 text-[12px] leading-4 text-zinc-500">Next.js, not WordPress bandaids. Ships fast, stays fast.</div>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>Custom Software</div>
                    <div className="mt-1 text-[12px] leading-4 text-zinc-500">Internal tools your ops team will actually use.</div>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>UI/UX Design</div>
                    <div className="mt-1 text-[12px] leading-4 text-zinc-500">Figma that devs don&apos;t hate to build.</div>
                  </div>
                </div>
              </div>

              <div className="my-6 h-[1px] bg-[#19B86A]"></div>

              {/* Course 02 - Grow */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#19B86A]" style={{ fontFamily: "Inter, sans-serif" }}>02 — GROW</span>
                  <span className="h-[1px] flex-1 bg-zinc-200"></span>
                  <span className="text-[10px] text-zinc-400">3 dishes</span>
                </div>
                <div className="mt-4 grid gap-5 md:grid-cols-3">
                  <div>
                    <div className="text-[12px] font-bold tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>SEO &amp; GEO</div>
                    <div className="mt-1 text-[12px] leading-4 text-zinc-500">Rank on Google and in AI answers.</div>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>PPC &amp; Advertising</div>
                    <div className="mt-1 text-[12px] leading-4 text-zinc-500">Paid search that pays for itself.</div>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>Digital Marketing</div>
                    <div className="mt-1 text-[12px] leading-4 text-zinc-500">Content your customers already search for.</div>
                  </div>
                </div>
              </div>

              <div className="my-6 h-[1px] bg-[#19B86A]/30"></div>

              {/* Course 03 - Think */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#19B86A]" style={{ fontFamily: "Inter, sans-serif" }}>03 — THINK</span>
                  <span className="h-[1px] flex-1 bg-zinc-200"></span>
                  <span className="text-[10px] text-zinc-400">1 dish</span>
                </div>
                <div className="mt-4 flex gap-4">
                  <div className="max-w-[320px]">
                    <div className="text-[12px] font-bold tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>AI Solutions</div>
                    <div className="mt-1 text-[12px] leading-4 text-zinc-500">We wire AI into your kitchen — not as a demo, as daily prep.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW A PROJECT GETS COOKED - horizontal strip, thin line, numerals, under 10-word one-liners */}
      <section className="border-y border-black/10 bg-[#1D1D1F] px-[4.2vw] py-10 md:py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9BE6BE]" style={{ fontFamily: "Inter, sans-serif" }}>03 — How a project gets cooked</p>
          <div className="relative mt-8">
            <div className="absolute left-0 right-0 top-[18px] hidden h-[1px] bg-white/15 md:block"></div>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#1D1D1F] text-[11px] font-bold text-white" style={{ fontFamily: "Inter, sans-serif" }}>01</div>
                <div className="mt-3 text-[13px] font-bold text-white" style={{ fontFamily: "Inter, sans-serif" }}>Mise en place</div>
                <div className="mt-1 text-[12px] leading-4 text-white/60">Everything prepped before we touch code.</div>
              </div>
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#19B86A] text-[11px] font-bold text-white" style={{ fontFamily: "Inter, sans-serif" }}>02</div>
                <div className="mt-3 text-[13px] font-bold text-white" style={{ fontFamily: "Inter, sans-serif" }}>Fire</div>
                <div className="mt-1 text-[12px] leading-4 text-white/60">Sprint hard, daily demos, no black boxes.</div>
              </div>
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#1D1D1F] text-[11px] font-bold text-white" style={{ fontFamily: "Inter, sans-serif" }}>03</div>
                <div className="mt-3 text-[13px] font-bold text-white" style={{ fontFamily: "Inter, sans-serif" }}>Plate</div>
                <div className="mt-1 text-[12px] leading-4 text-white/60">Polish, launch, watch real users eat.</div>
              </div>
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#1D1D1F] text-[11px] font-bold text-white" style={{ fontFamily: "Inter, sans-serif" }}>04</div>
                <div className="mt-3 text-[13px] font-bold text-white" style={{ fontFamily: "Inter, sans-serif" }}>Season to taste</div>
                <div className="mt-1 text-[12px] leading-4 text-white/60">Tune from data, not guesswork.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Meet the crew - keep as-is, dark */}
      <section className="dark bg-[#0a0a0a] px-[4.2vw] py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-[24px] font-bold tracking-tight text-white md:text-[28px]" style={{ fontFamily: "Inter, sans-serif" }}>Meet the crew</h2>
            <p className="mt-2 text-[14px] leading-6 text-zinc-400">The people behind ScaleChefs — technology, marketing and AI, built to scale ambitious businesses.</p>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-[#0a0a0a] p-2 md:p-6">
            <TeamShowcase />
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA - one-line hook, on-brand */}
      <section className="bg-white px-[4.2vw] py-12 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[20px] bg-[#1D1D1F] p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-[28px] font-bold leading-none tracking-tight text-white md:text-[32px]" style={{ fontFamily: "Inter, sans-serif" }}>Hungry? Let&apos;s cook.</h2>
            <p className="mt-2 max-w-[520px] text-[13px] leading-5 text-white/60">You bring the appetite, we bring the kitchen. No pitch deck required.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:hello@scalechefs.com" className="bg-[#19B86A] px-6 py-3 text-[13px] font-bold text-white hover:bg-[#109556]" style={{ fontFamily: "Inter, sans-serif" }}>Join our journey ↗</a>
            <Link href="/#contact" className="bg-white px-6 py-3 text-[13px] font-bold text-[#1D1D1F] hover:bg-[#DCF8E8]" style={{ fontFamily: "Inter, sans-serif" }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
