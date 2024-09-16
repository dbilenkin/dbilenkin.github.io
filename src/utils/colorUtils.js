// src/utils/colorUtils.js
import chroma from 'chroma-js';

export function getContrastingTextColor(backgroundColor) {
  const whiteContrast = chroma.contrast(backgroundColor, 'white');
  const blackContrast = chroma.contrast(backgroundColor, 'black');

  // WCAG recommends a contrast ratio of at least 4.5:1
  return whiteContrast >= 4.5 ? '#fff' : '#000';
}
