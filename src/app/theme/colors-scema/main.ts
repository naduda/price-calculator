import { getColorPalette } from '../utils/color-utils';

export const ecommerceColors = {
  ...getColorPalette('#093257', '#ffffff', '#474747', 'primary'),
  ...getColorPalette('#dc3545', '#ffffff', '#dc3545', 'danger'),
  ...getColorPalette('#979797', '#ffffff', '#979797', 'secondary'),
  ...getColorPalette('#37aeec', '#ffffff', '#37aeec', 'info'),
  ...getColorPalette('#e89c30', '#ffffff', '#e89c30', 'warn'),
  ...getColorPalette('#6eaf50', '#ffffff', '#6eaf50', 'success'),
};
