import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const menuBarColors: UIColors = (palette) => {
  const { background, neutral } = palette;
  const { dialogBackground } = dialogTokens(palette);

  return {
    menu: {
      // Background color of menu items.
      background: dialogBackground,

      // Foreground color of menu items.
      foreground: neutral[2],

      // Foreground color of the selected menu item in menus.
      selectionForeground: neutral[1],

      // Background color of the selected menu item in menus.
      selectionBackground: background[1],

      // Border color of the selected menu item in menus.
      selectionBorder: background[1],

      // Color of a separator menu item in menus.
      separatorBackground: background[0]
    },

    menubar: {
      // Foreground color of the selected menu item in the menubar.
      selectionForeground: neutral[3],

      // Background color of the selected menu item in the menubar.
      selectionBackground: background[5],

      // Border color of the selected menu item in the menubar.
      selectionBorder: background[5]
    }
  };
};

export default menuBarColors;
