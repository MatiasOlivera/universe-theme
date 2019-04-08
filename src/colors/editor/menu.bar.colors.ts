import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const menuBarColors: UIColors = (palette) => {
  const { gray, yellow } = palette;
  const { dialogBackground } = dialogTokens(palette);

  return {
    menu: {
      background: dialogBackground,
      foreground: gray[0],
      selectionBackground: yellow[3],
      selectionBorder: yellow[3],
      selectionForeground: gray[9],
      separatorBackground: gray[6]
    },
    menubar: {
      selectionBackground: dialogBackground,
      selectionBorder: dialogBackground,
      selectionForeground: gray[0]
    }
  };
};

export default menuBarColors;
