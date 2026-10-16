"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Compact "who we are / what we are for" band.
 *
 * Design notes
 * - Background is the same pale green the portfolio section now uses
 *   (.portfolio-section is var(--pale)). The About and Portfolio sections
 *   read as a matched pair, and the two white sections between them break the
 *   page into an alternating green / white / green / white rhythm.
 * - No eyebrow label. The homepage already runs one on the hero plus a kicker
 *   on portfolio and testimonials, so adding a fourth micro-label would push
 *   the page into a templated rhythm. The band reads as "about" from context.
 * - No call to action here. Nav already carries "About Us" and the hero already
 *   carries the contact action, so a third link would duplicate intent.
 * - Figures are the ones the brand already publishes on /about, not invented.
 * - Prata stays at weight 400. The brand sets a single serif weight.
 *
 * Alignment contract
 * - `lg:items-stretch` makes both columns exactly equal height, so the panel
 *   top and bottom always line up with the text column regardless of how many
 *   lines the copy wraps to. The text column centres itself inside that box and
 *   the figures centre inside theirs, so the optical baseline is stable at any
 *   viewport width. Centring two mismatched blocks against each other does not.
 * - Figures stack as full-width rows rather than three narrow columns. A label
 *   like "Average time to first ship" set in 11px tracked uppercase needs around
 *   200px on one line, which a three-up grid inside a half-width panel cannot
 *   give it, so it was wrapping to three cramped lines per column.
 */

const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const;

const FIGURES = [
  { value: "60+", label: "Projects shipped" },
  { value: "14 days", label: "To first ship" },
  { value: "95%", label: "Clients who stay" },
];

export default function AboutStrip() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.7, delay, ease: SMOOTH_EASE },
  });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-[rgba(29,29,31,0.11)] bg-[#DCF8E8] px-[4.2vw] py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[1.12fr_1fr] lg:items-stretch lg:gap-16">
          <motion.div
            {...rise(0)}
            className="flex flex-col justify-center"
          >
            <span
              className="inline-block w-fit rounded bg-[#9BE6BE] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1D1D1F]"
              style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
            >
              About us
            </span>

            <h2
              id="about-heading"
              className="mt-3 text-[30px] font-normal leading-[1.12] tracking-tight text-[#1D1D1F] md:text-[42px]"
              style={{ fontFamily: "Prata, Georgia, serif" }}
            >
              A four-person studio
              <br className="hidden lg:inline" /> built to scale you.
            </h2>
            <p
              className="mt-4 max-w-[52ch] text-[15px] leading-6 text-[#6B6B72] md:text-[16px]"
              style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
            >
              The people who scope the work build it and answer when you email.
              No account managers, no handover to a team you have never met. Our
              goal is growth that keeps working after we step back.
            </p>
          </motion.div>

          <motion.div
            {...rise(0.12)}
            className="flex flex-col rounded-[20px] bg-[#9BE6BE] p-6 md:p-7"
          >
            <dl className="flex flex-1 flex-col justify-center">
              {FIGURES.map((figure) => (
                <div
                  key={figure.label}
                  className="flex items-baseline justify-between gap-5 border-t border-[rgba(29,29,31,0.16)] py-3.5 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <dd
                    className="order-1 shrink-0 text-[28px] font-normal leading-none tracking-tight text-[#1D1D1F] tabular-nums md:text-[32px]"
                    style={{ fontFamily: "Prata, Georgia, serif" }}
                  >
                    {figure.value}
                  </dd>
                  <dt
                    className="order-2 text-right text-[12px] font-medium uppercase leading-snug tracking-[0.1em] text-[#1D1D1F]/80"
                    style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
                  >
                    {figure.label}
                  </dt>
                </div>
              ))}
            </dl>

            <p
              className="mt-6 border-t border-[rgba(29,29,31,0.16)] pt-5 text-[17px] leading-[1.35] text-[#1D1D1F] md:text-[19px]"
              style={{ fontFamily: "Prata, Georgia, serif" }}
            >
              We count days to ship, not hours billed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}