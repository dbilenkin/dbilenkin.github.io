// src/utils/colorPalette.js
import chroma from 'chroma-js';

export function generateColorPalette(baseHue) {
  // Base color with reduced saturation and increased lightness for a muted effect
  const baseColor = chroma.hsl(baseHue, 0.4, 0.7);

  // Generate analogous colors with adjusted saturation and lightness
  const palette = [
    baseColor.hex(), // Base color
    baseColor.set('hsl.h', '+30').desaturate(0.2).brighten(0.2).hex(),
    baseColor.set('hsl.h', '+60').desaturate(0.4).brighten(0.4).hex(),
    baseColor.set('hsl.h', '-30').desaturate(0.2).darken(0.2).hex(),
    baseColor.set('hsl.h', '-60').desaturate(0.4).darken(0.4).hex(),
  ];

  return palette;
}
