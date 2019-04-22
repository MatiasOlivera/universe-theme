import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

// The theme colors for breadcrumbs navigation
const breadcrumbColors: UIColors = (palette) => {
  const { blueGray, background } = palette;
  const { dialogBackground } = dialogTokens(palette);

  return {
    breadcrumb: {
      // Background color of breadcrumb items.
      background: background[5],

      // Color of breadcrumb items.
      foreground: blueGray[3],

      // Color of focused breadcrumb items.
      focusForeground: blueGray[2],

      // Color of selected breadcrumb items.
      activeSelectionForeground: blueGray[1]
    },

    breadcrumbPicker: {
      // Background color of breadcrumb item picker.
      background: dialogBackground
    }
  };
};

export default breadcrumbColors;
