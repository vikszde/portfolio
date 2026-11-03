// Writes src/assets/halftone.svg: one tile of the halftone band from the
// Figma "Halftone" component. Dots grow from nothing at the top to touching
// at the bottom, on a staggered 10px grid. The tile is 600px wide (a multiple
// of the grid step) and dots that cross an edge are drawn again on the
// opposite edge, so neighbouring tiles complete each other without a seam.
//
// Run with: node scripts/generate-halftone.mjs

import { writeFileSync } from "node:fs";

const width = 600;
const height = 200;
const step = 10;
const maxRadius = 4.4;
const rows = height / step;

const dot = (cx, cy, radius) => {
  const r = radius.toFixed(2);
  return `M${(cx - radius).toFixed(2)} ${cy}a${r} ${r} 0 1 0 ${(radius * 2).toFixed(2)} 0a${r} ${r} 0 1 0 ${(-radius * 2).toFixed(2)} 0`;
};

let d = "";
for (let row = 0; row < rows; row++) {
  const radius = maxRadius * (row / (rows - 1));
  if (radius < 0.5) continue;
  const cy = row * step + step / 2;
  const offset = row % 2 ? step / 2 : 0;
  for (let cx = offset; cx < width; cx += step) {
    d += dot(cx, cy, radius);
    if (cx - radius < 0) d += dot(cx + width, cy, radius);
    if (cx + radius > width) d += dot(cx - width, cy, radius);
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><path d="${d}"/></svg>\n`;
writeFileSync(new URL("../src/assets/halftone.svg", import.meta.url), svg);
console.log(`halftone.svg: ${svg.length} bytes`);
