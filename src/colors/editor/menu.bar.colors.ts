import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const menuBarColors: UIColors = (palette) => {
  const { blueGray, yellow, black } = palette;
  const { dialogBackground } = dialogTokens(palette);

  return {
    menu: {
      background: dialogBackground,
      foreground: blueGray[0],
      selectionBackground: yellow[3],
      selectionBorder: yellow[3],
      selectionForeground: black,
      separatorBackground: blueGray[6]
    },
    menubar: {
      selectionBackground: dialogBackground,
      selectionBorder: dialogBackground,
      selectionForeground: blueGray[0]
    }
  };
};

export default menuBarColors;
