import { UIColors } from '../../types/colors-types';

// The theme colors for breadcrumbs navigation
const breadcrumbColors: UIColors = (palette) => {
  const { blueGray, background } = palette;

  return {
    breadcrumb: {
      // Background color of breadcrumb items.
      background: background[5],

      // Color of breadcrumb items.
      foreground: blueGray[2],

      // Color of focused breadcrumb items.
      focusForeground: blueGray[1],

      // Color of selected breadcrumb items.
      activeSelectionForeground: blueGray[1]
    },

    breadcrumbPicker: {
      // Background color of breadcrumb item picker.
      background: background[4]
    }
  };
};

export default breadcrumbColors;
