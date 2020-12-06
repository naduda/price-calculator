export function shadeColor(color: string, percent: number): string {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = R * (100 + percent) / 100;
  G = G * (100 + percent) / 100;
  B = B * (100 + percent) / 100;

  R = Math.floor((R < 255) ? R : 255);
  G = Math.floor((G < 255) ? G : 255);
  B = Math.floor((B < 255) ? B : 255);

  const RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16));
  const GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16));
  const BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16));

  return '#' + RR + GG + BB;
}

// export function adjustColor(col, amt, rgb?) {
//
//   let usePound = false;
//
//   if (col[0] === '#') {
//     col = col.slice(1);
//     usePound = true;
//   }
//
//   const num = parseInt(col, 16);
//
//   let r = (num >> 16) + amt;
//
//   if (r > 255) {
//     r = 255;
//   } else if (r < 0) {
//     r = 0;
//   }
//
//   let b = ((num >> 8) & 0x00FF) + amt;
//
//   if (b > 255) {
//     b = 255;
//   } else if (b < 0) {
//     b = 0;
//   }
//
//   let g = (num & 0x0000FF) + amt;
//
//   if (g > 255) {
//     g = 255;
//   } else if (g < 0) {
//     g = 0;
//   }
//
//   if (rgb) {
//     return 'rgb(' + r + ',' + g + ',' + b + ')';
//   }
//
//   return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
// }

// export const mixColor = function (color_1, color_2, weight) {
//   const d2h = (d: number) => d.toString(16); // convert a decimal value to hex
//   const h2d = (h) => parseInt(h, 16); // convert a hex value to decimal
//
//   weight = (typeof (weight) !== 'undefined') ? weight : 50; // set the weight to 50%, if that argument is omitted
//
//   let color = '#';
//
//   for (let i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
//     const v1 = h2d(color_1.substr(i, 2)); // extract the current pairs
//     const v2 = h2d(color_2.substr(i, 2));
//
//     // combine the current pairs from each source color, according to the specified weight
//     let val = d2h(Math.round(v2 + (v1 - v2) * (weight / 100.0)));
//
//     while (val.length < 2) {
//       val = '0' + val;
//     } // prepend a '0' if val results in a single digit
//
//     color += val; // concatenate val to our new color string
//   }
//
//   return color;
// };

// export const rgb2hex = (rgb) => {
//   // A very ugly regex that parses a string such as 'rgb(191, 0, 46)' and produces an array
//   rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d\.]+))?\)$/);
//
//   const hex = (x) => ('0' + parseInt(x, 10).toString(16)).slice(-2); // another way to convert a decimal to hex
//
//   return (hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase(); // concatenate the pairs and return them upper cased
// };

// function componentToHex(c) {
//   const hex = c.toString(16);
//   return hex.length === 1 ? '0' + hex : hex;
// }
//
// export function rgbToHex(rgb) {
//   rgb = rgb.split(',');
//   const r = parseInt(rgb[0].substring(4), 10); // skip rgb(
//   const g = parseInt(rgb[1], 10); // this is just g
//   const b = parseInt(rgb[2], 10); // parseInt scraps trailing )
//
//   return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }
//
// export function hexToRgb(hex) {
//   // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
//   const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//     return r + r + g + g + b + b;
//   });
//
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result ? {
//     r: parseInt(result[1], 16),
//     g: parseInt(result[2], 16),
//     b: parseInt(result[3], 16)
//   } : null;
// }

export function getColorPalette(color: string, colorText: string, secondText: string, prefix: string): any {
  return {
    [prefix + '-text']: colorText,
    [prefix + '-text-second']: secondText,
    // [prefix + '-text-light']: shadeColor(colorText, 10),
    // [prefix + '-text-dark']: shadeColor(colorText, -10),
    [prefix + '-base']: color,
    // [prefix + '-background']: mixColor(color.substring(1), 'ffffff', 16),
    // [prefix + '-background-hover']: mixColor(color.substring(1), 'ffffff', 8),
    [prefix + '-light-5']: shadeColor(color, 5),
    [prefix + '-light-10']: shadeColor(color, 10),
    [prefix + '-light-15']: shadeColor(color, 15),
    [prefix + '-light-20']: shadeColor(color, 20),
    [prefix + '-light-25']: shadeColor(color, 25),
    [prefix + '-light-30']: shadeColor(color, 30),
    [prefix + '-dark']: shadeColor(color, -5),
    [prefix + '-dark-5']: shadeColor(color, -5),
    [prefix + '-dark-10']: shadeColor(color, -10),
    [prefix + '-dark-15']: shadeColor(color, -15),
    [prefix + '-dark-20']: shadeColor(color, -20),
    [prefix + '-dark-25']: shadeColor(color, -25),
    [prefix + '-dark-30']: shadeColor(color, -30),
  };
}
