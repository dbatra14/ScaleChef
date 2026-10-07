"use client";

/**
 * Wave lettering — a rolling sea of drifting glyph rows filling the lower part
 * of the hero, used as a decorative background behind the content.
 *
 * All geometry lives in `lib/wave-math` as pure functions so it can be verified
 * without a browser (see `scripts/verify-wave-math.mts`). This module is only
 * the canvas plumbing: sizing, pre-measured glyph metrics, the rAF loop and the
 * painter's-algorithm row pass.
 *
 * The sea occupies the lower part of the hero: the horizon row sits at 35% of
 * the hero height and the nearest row at 97%, so the top third stays empty
 * white. Rows run the full canvas width and bleed off both edges.
 */

import { useEffect, useRef } from "react";
import {
  MAX_DPR,
  MAX_DT_MS,
  WAVE_BACKGROUND,
  WAVE_COLOR,
  WAVE_DRIFT_EM_PER_SEC,
  WAVE_LETTER_SPACING_EM,
  WAVE_OMEGA,
  WAVE_ROWS,
  WAVE_TEXT,
  glyphRotation,
  rowAlpha,
  rowBaseY,
  rowFontSize,
  waveHeight,
} from "@/lib/wave-math";

const FONT_WEIGHT = 500;
const FONT_FAMILY = 'Montserrat, "Helvetica Neue", Arial, sans-serif';
/** Step for the occlusion fill and for the letter positions. */
const CURVE_STEP = 8;

export interface WaveLetteringProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function WaveLettering({ className, style }: WaveLetteringProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = Array.from(WAVE_TEXT);

    let cssW = 1;
    let cssH = 1;
    let dpr = 1;
    let bg = WAVE_BACKGROUND;

    // Per-row values, preallocated so the frame loop allocates nothing.
    const u = new Float64Array(WAVE_ROWS);
    const baseY = new Float64Array(WAVE_ROWS);
    const fontPx = new Float64Array(WAVE_ROWS);
    const alpha = new Float64Array(WAVE_ROWS);
    const advance = new Float64Array(WAVE_ROWS);
    const offsets = new Array<Float64Array>(WAVE_ROWS);
    const glyphW = new Array<Float64Array>(WAVE_ROWS);

    /**
     * Glyph metrics per row font size. measureText runs here, on layout, never
     * inside the frame loop. Advances are cumulative floats so glyphs keep
     * sub-pixel placement as the row drifts.
     */
    const measure = () => {
      for (let i = 0; i < WAVE_ROWS; i++) {
        const px = fontPx[i];
        ctx.font = `${FONT_WEIGHT} ${px}px ${FONT_FAMILY}`;
        const spacing = WAVE_LETTER_SPACING_EM * px;
        const o = new Float64Array(chars.length);
        const w = new Float64Array(chars.length);
        let cursor = 0;
        for (let k = 0; k < chars.length; k++) {
          const cw = ctx.measureText(chars[k]).width;
          o[k] = cursor;
          w[k] = cw;
          cursor += cw + spacing;
        }
        offsets[i] = o;
        glyphW[i] = w;
        advance[i] = cursor;
      }
    };

    const layout = () => {
      const rect = canvas.getBoundingClientRect();
      cssW = Math.max(1, rect.width);
      cssH = Math.max(1, rect.height);
      dpr = Math.min(MAX_DPR, window.devicePixelRatio || 1);
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);

      const hero = canvas.closest(".hero") ?? canvas.parentElement;
      if (hero) {
        const cs = getComputedStyle(hero);
        // The occlusion fill is only correct on a solid background; fall back to
        // white when the hero paints a gradient.
        const solid =
          cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)" &&
          !(cs.backgroundImage && cs.backgroundImage.includes("gradient"));
        bg = solid ? cs.backgroundColor : WAVE_BACKGROUND;
      }

      for (let i = 0; i < WAVE_ROWS; i++) {
        u[i] = i / (WAVE_ROWS - 1);
        baseY[i] = rowBaseY(u[i], cssH);
        fontPx[i] = rowFontSize(u[i]);
        alpha[i] = rowAlpha(u[i]);
      }

      measure();
    };

    const draw = (t: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, cssW, cssH);
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";
      ctx.fillStyle = WAVE_COLOR;

      // Horizon first, nearest last: each row paints the water in front of it,
      // so nearer crests occlude the rows behind.
      for (let i = 0; i < WAVE_ROWS; i++) {
        const ui = u[i];
        const rowBase = baseY[i];

        // Occlusion: fill from this row's wave curve down to the canvas bottom
        // with the hero background, hiding everything already painted behind it.
        ctx.beginPath();
        ctx.moveTo(0, cssH);
        for (let x = 0; x <= cssW; x += CURVE_STEP) {
          ctx.lineTo(x, rowBase - waveHeight(x, ui, t, cssW));
        }
        ctx.lineTo(cssW, cssH);
        ctx.closePath();
        ctx.fillStyle = bg;
        ctx.fill();

        ctx.globalAlpha = alpha[i];
        ctx.fillStyle = WAVE_COLOR;

        const adv = advance[i];
        const o = offsets[i];
        const gw = glyphW[i];
        const px = fontPx[i];
        // Float modulo wrapping, so the drift never jumps at the seam.
        const raw = WAVE_DRIFT_EM_PER_SEC * px * t;
        const drift = ((raw % adv) + adv) % adv;

        for (let tileX = -adv + drift; tileX < cssW + adv; tileX += adv) {
          for (let k = 0; k < chars.length; k++) {
            const x = tileX + o[k];
            if (x > cssW + px) break;
            if (x + gw[k] < 0) continue;

            const y = rowBase - waveHeight(x, ui, t, cssW);
            // Analytic rotation from the same wave formula, clamped to ±0.3 rad.
            const rot = glyphRotation(x, ui, t, cssW);

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.translate(x, y);
            if (rot !== 0) ctx.rotate(rot);
            ctx.fillText(chars[k], 0, 0);
          }
        }
      }

      ctx.globalAlpha = 1;
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let last = 0;
    let onScreen = true;
    let time = 0;

    const frame = (stamp: number) => {
      raf = 0;
      // Clamp dt so returning to a backgrounded tab does not jump the wave.
      const dt = last === 0 ? 1000 / 60 : Math.min(MAX_DT_MS, stamp - last);
      last = stamp;
      time += dt / 1000;
      draw(time);
      if (!reduced) schedule();
    };

    const schedule = () => {
      if (!raf && onScreen && !document.hidden) raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
    };

    layout();
    draw(0);

    const ro = new ResizeObserver(() => {
      layout();
      draw(time);
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    const heroEl = canvas.closest(".hero");
    if (heroEl) ro.observe(heroEl);

    const io = new IntersectionObserver(
      (entries) => {
        onScreen = entries.some((e) => e.isIntersecting);
        if (onScreen) schedule();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else {
        last = 0;
        schedule();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (!reduced) schedule();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} style={style} aria-hidden="true" />;
}

export { WAVE_OMEGA };