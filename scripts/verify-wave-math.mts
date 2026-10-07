/**
 * Verifies the wave geometry against the current spec. Run with:
 *   npx tsx scripts/verify-wave-math.mts
 */
import {
  WAVE_GLYPH_PX,
  WAVE_OMEGA,
  WAVE_ROWS,
  WAVE_WAVELENGTH_FRAC,
  glyphRotation,
  horizonY,
  perspectiveScale,
  rowBaseY,
  rowFontSize,
  waveHeight,
  waveLength,
  wavePhase,
} from "../lib/wave-math";

const W = 1288;
const H = 700;
const T = 0;
const Lw = waveLength(W);

let failures = 0;
function check(label: string, ok: boolean, detail: string) {
  if (!ok) failures++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}  ${detail}`);
}

console.log(`W=${W}  H=${H}  t=${T}  Lw=${Lw.toFixed(2)}  rows=${WAVE_ROWS}`);
console.log(`glyphBase=${WAVE_GLYPH_PX}px  lambdaFrac=${WAVE_WAVELENGTH_FRAC}  omega=${WAVE_OMEGA.toFixed(5)}\n`);

// ---------------------------------------------------------------- check 1
console.log("CHECK 1  glyph font size for u = 0, 0.5, 1   (expect ~8, 9.5, 11)");
for (const u of [0, 0.5, 1]) {
  console.log(`      font(${u.toFixed(2)}) = ${rowFontSize(u).toFixed(2)}px   s(u)=${perspectiveScale(u).toFixed(3)}`);
}
check("font(0) ~ 8px", Math.abs(rowFontSize(0) - 8) <= 0.3, rowFontSize(0).toFixed(2));
check("font(0.5) ~ 9.5px", Math.abs(rowFontSize(0.5) - 9.5) <= 0.3, rowFontSize(0.5).toFixed(2));
check("font(1) = 11px", Math.abs(rowFontSize(1) - 11) <= 0.01, rowFontSize(1).toFixed(2));

// ---------------------------------------------------------------- check 2
console.log("\nCHECK 2  baseY table and row-gap ratio");
const hz = horizonY(H);
console.log(`      horizonY(${H}) = ${hz.toFixed(2)}px`);
const baseYs: number[] = [];
for (let i = 0; i < WAVE_ROWS; i++) baseYs.push(rowBaseY(i / (WAVE_ROWS - 1), H));
for (const u of [0, 0.25, 0.5, 0.75, 1]) {
  console.log(`      baseY(${u.toFixed(2)}) = ${rowBaseY(u, H).toFixed(2)}px`);
}
const firstGap = baseYs[1] - baseYs[0];
const lastGap = baseYs[WAVE_ROWS - 1] - baseYs[WAVE_ROWS - 2];
const ratio = lastGap / firstGap;
console.log(`      first row gap (top)    = ${firstGap.toFixed(2)}px`);
console.log(`      last row gap (bottom) = ${lastGap.toFixed(2)}px`);
console.log(`      bottom/top gap ratio  = ${ratio.toFixed(2)}x`);
check("baseY(1) ~= 679px", Math.abs(baseYs[WAVE_ROWS - 1] - 679) <= 1, baseYs[WAVE_ROWS - 1].toFixed(2));
check("bottom gap <= ~2x top gap", ratio <= 2.1, `${ratio.toFixed(2)}x`);

// ---------------------------------------------------------------- check 3
console.log("\nCHECK 3  maximum rotation across all glyphs");
let maxRot = 0;
let worst = { x: 0, u: 0 };
for (let i = 0; i < WAVE_ROWS; i++) {
  const u = i / (WAVE_ROWS - 1);
  for (let x = 0; x <= W; x += 1) {
    const r = Math.abs(glyphRotation(x, u, T, W));
    if (r > maxRot) {
      maxRot = r;
      worst = { x, u };
    }
  }
}
console.log(`      max |rotation| = ${maxRot.toFixed(4)} rad (${((maxRot * 180) / Math.PI).toFixed(2)} deg) at x=${worst.x} u=${worst.u.toFixed(3)}`);
console.log("      clamp limit    = +/-0.3 rad");
check("max |rotation| <= 0.3 rad", maxRot <= 0.3 + 1e-12, `${maxRot.toFixed(4)}`);

// ---------------------------------------------------------------- check 4
console.log("\nCHECK 4  nearest row peak-to-trough over x in [0, W]  (expect 18..30px)");
function sweep(u: number) {
  let min = Infinity;
  let max = -Infinity;
  for (let x = 0; x <= W; x += 0.5) {
    const h = waveHeight(x, u, T, W);
    if (h < min) min = h;
    if (h > max) max = h;
  }
  return { min, max, ptp: max - min };
}
const near = sweep(1);
const far = sweep(0);
console.log(`      u=1  h_min=${near.min.toFixed(2)} h_max=${near.max.toFixed(2)} ptp=${near.ptp.toFixed(2)}px  (A=${(15 * perspectiveScale(1)).toFixed(1)}px)`);
console.log(`      u=0  h_min=${far.min.toFixed(2)} h_max=${far.max.toFixed(2)} ptp=${far.ptp.toFixed(2)}px  (A=${(15 * perspectiveScale(0)).toFixed(1)}px)`);
check("nearest ptp within 18..30px", near.ptp >= 18 && near.ptp <= 30, `${near.ptp.toFixed(2)}px`);

// ---------------------------------------------------------------- check 5
console.log("\nCHECK 5  rows reach the bottom edge with no empty band");
const lastBase = baseYs[WAVE_ROWS - 1];
console.log(`      last row baseline = ${lastBase.toFixed(2)}px = ${((lastBase / H) * 100).toFixed(1)}% of H`);
console.log(`      0.95*H = ${(0.95 * H).toFixed(2)}px`);
check("last baseline >= 0.95*H", lastBase >= 0.95 * H, `${lastBase.toFixed(2)}px`);

// -------------------------------------------------------------- extra info
console.log("\ncrest coherence (unchanged formula):");
const p50 = wavePhase(400, 0.5, T, W);
const p52 = wavePhase(400, 0.52, T, W);
const dDeg = (Math.abs(p52 - p50) * 180) / Math.PI;
console.log(`      phase(u=0.50)=${p50.toFixed(4)}  phase(u=0.52)=${p52.toFixed(4)}  diff=${dDeg.toFixed(2)} deg`);

console.log("\nrow table");
for (const i of [0, 11, 22, 33, WAVE_ROWS - 1]) {
  const u = i / (WAVE_ROWS - 1);
  console.log(
    `      i=${String(i).padStart(2)} u=${u.toFixed(3)} font=${rowFontSize(u).toFixed(2)}px baseY=${rowBaseY(u, H).toFixed(1)}px`
  );
}

console.log(`\n${failures === 0 ? "ALL CHECKS PASS" : failures + " CHECK(S) FAILED"}`);
process.exit(failures === 0 ? 0 : 1);