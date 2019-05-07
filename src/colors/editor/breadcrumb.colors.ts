import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

// The theme colors for breadcrumbs navigation
const breadcrumbColors: UIColors = (palette) => {
  const { neutral, background } = palette;
  const { dialogBackground } = dialogTokens(palette);

  return {
    breadcrumb: {
      // Background color of breadcrumb items.
      background: background[5],

      // Color of breadcrumb items.
      foreground: neutral[3],

      // Color of focused breadcrumb items.
      focusForeground: neutral[2],

      // Color of selected breadcrumb items.
      activeSelectionForeground: neutral[1]
    },

    breadcrumbPicker: {
      // Background color of breadcrumb item picker.
      background: dialogBackground
    }
  };
};

export default breadcrumbColors;
