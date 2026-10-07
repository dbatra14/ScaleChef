/**
 * Wave lettering maths — pure functions, no DOM and no React.
 *
 * Kept separate from the canvas component so the geometry can be verified
 * directly in a test script (see `scripts/verify-wave-math.mts`).
 *
 * Row parameterisation: u = 0 at the horizon (farthest, top of the sea) and
 * u = 1 at the nearest row (bottom). The sea fills only the lower part of the
 * hero, so the top 35% is left empty.
 *
 * The phase carries a depth term, (1 - u) * WAVE_TWIST, measured in cycles.
 * Because it is deliberately NOT scaled by perspective, a crest crossing one
 * row crosses its neighbours a fixed fraction of a wavelength further along in
 * x. That is what makes the crests read as diagonal ridges rolling toward the
 * viewer rather than as rigid horizontal slats.
 */

export const TAU = Math.PI * 2;

export const WAVE_ROWS = 44;
export const WAVE_HORIZON_FRAC = 0.01;
export const WAVE_NEAREST_FRAC = 0.97;
/** baseY spreads with u^1.15, so far rows pack tightly and near rows spread out. */
export const WAVE_DEPTH_EXP = 1.15;
export const WAVE_GLYPH_PX = 11;
export const WAVE_AMP_PX = 15;
export const WAVE_HARMONIC = 0.25;
export const WAVE_HARMONIC_PHASE = 1.3;
export const WAVE_TWIST = 1.4;
export const WAVE_WAVELENGTH_FRAC = 0.9;
/** 7 second period. */
export const WAVE_OMEGA = TAU / 7;
export const WAVE_MAX_ROTATION = 0.3;
export const WAVE_COLOR = "#6FBF92";
export const WAVE_BACKGROUND = "#FFFFFF";
export const WAVE_TEXT = "STRATEGY · SCALABILITY · SYSTEM ·";
export const WAVE_LETTER_SPACING_EM = 0.3;
export const WAVE_DRIFT_EM_PER_SEC = 0.3;
export const MAX_DT_MS = 50;
export const MAX_DPR = 2;

export function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

/** Row parameter: 0 at the horizon, 1 at the nearest row. */
export function rowParam(i: number, rows: number = WAVE_ROWS): number {
  return i / (rows - 1);
}

/** Perspective scale. Rows shrink towards the horizon. */
export function perspectiveScale(u: number): number {
  return 0.72 + 0.28 * u;
}

/**
 * Peak of sin(p) + 0.25 * sin(2p + 1.3) is ~0.803, so 0.82 is a safe upper
 * bound on how far the farthest row's crests rise above its baseline.
 */
const CREST_FACTOR = 0.82;

/**
 * Horizon row position. The sea now starts at the top of the hero, but the
 * farthest row's crests rise above its own baseline, so it needs that much
 * headroom or its tallest glyphs clip against the top of the canvas.
 *
 * The headroom is a fixed pixel amount because the amplitude is specified in
 * pixels and does not scale with the hero height; on a short hero the fraction
 * alone would not be enough.
 */
export function horizonY(height: number): number {
  const headroom = WAVE_AMP_PX * perspectiveScale(0) * CREST_FACTOR;
  return Math.max(WAVE_HORIZON_FRAC * height, headroom);
}

/** Baseline for a row, in CSS pixels from the top of the hero. */
export function rowBaseY(u: number, height: number): number {
  const horizon = horizonY(height);
  const span = WAVE_NEAREST_FRAC * height - horizon;
  return horizon + span * Math.pow(u, WAVE_DEPTH_EXP);
}

/** Glyph font size for a row, in CSS pixels. */
export function rowFontSize(u: number): number {
  return WAVE_GLYPH_PX * perspectiveScale(u);
}

/** Painted alpha for a row. */
export function rowAlpha(u: number): number {
  return 0.08 + 0.5 * Math.pow(u, 1.2);
}

export function waveLength(canvasWidth: number): number {
  return Math.max(1, WAVE_WAVELENGTH_FRAC * canvasWidth);
}

/** phase = 2π * (x / Lw + (1 - u) * 1.4) - ω t */
export function wavePhase(x: number, u: number, t: number, canvasWidth: number): number {
  return TAU * (x / waveLength(canvasWidth) + (1 - u) * WAVE_TWIST) - WAVE_OMEGA * t;
}

/** h = A * (sin(phase) + 0.25 * sin(2 * phase + 1.3)) */
export function waveHeight(x: number, u: number, t: number, canvasWidth: number): number {
  const phase = wavePhase(x, u, t, canvasWidth);
  const amp = WAVE_AMP_PX * perspectiveScale(u);
  return amp * (Math.sin(phase) + WAVE_HARMONIC * Math.sin(2 * phase + WAVE_HARMONIC_PHASE));
}

/**
 * dh/dx, taken analytically from the same formula rather than by differencing
 * sampled heights (differencing quantises and shows up as rotation jitter).
 */
export function waveHeightSlope(x: number, u: number, t: number, canvasWidth: number): number {
  const phase = wavePhase(x, u, t, canvasWidth);
  const amp = WAVE_AMP_PX * perspectiveScale(u);
  return (
    amp *
    (TAU / waveLength(canvasWidth)) *
    (Math.cos(phase) + 2 * WAVE_HARMONIC * Math.cos(2 * phase + WAVE_HARMONIC_PHASE))
  );
}

/**
 * Glyph rotation. Canvas y grows downward, so a rising curve (dh/dx > 0) needs a
 * negative rotation. Clamped to ±0.3 rad.
 */
export function glyphRotation(x: number, u: number, t: number, canvasWidth: number): number {
  return clamp(
    Math.atan(-waveHeightSlope(x, u, t, canvasWidth)),
    -WAVE_MAX_ROTATION,
    WAVE_MAX_ROTATION
  );
}

/** Drawn y for a glyph. */
export function glyphY(x: number, u: number, t: number, canvasWidth: number, height: number): number {
  return rowBaseY(u, height) - waveHeight(x, u, t, canvasWidth);
}