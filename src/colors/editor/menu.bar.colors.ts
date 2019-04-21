import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const menuBarColors: UIColors = (palette) => {
  const { gray, yellow, blueGray } = palette;
  const { dialogBackground } = dialogTokens(palette);

  return {
    menu: {
      // Background color of menu items.
      background: dialogBackground,

      // Foreground color of menu items.
      foreground: blueGray[0],

      // Foreground color of the selected menu item in menus.
      selectionForeground: gray[9],

      // Background color of the selected menu item in menus.
      selectionBackground: yellow[3],

      // Border color of the selected menu item in menus.
      selectionBorder: yellow[3],

      // Color of a separator menu item in menus.
      separatorBackground: blueGray[6]
    },

    menubar: {
      // Foreground color of the selected menu item in the menubar.
      selectionForeground: blueGray[0],

      // Background color of the selected menu item in the menubar.
      selectionBackground: dialogBackground,

      // Border color of the selected menu item in the menubar.
      selectionBorder: dialogBackground
    }
  };
};

export default menuBarColors;
