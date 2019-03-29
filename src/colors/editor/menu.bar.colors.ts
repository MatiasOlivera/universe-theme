import { EditorColors } from '../../types/colors-types';
import { background_400, background_500 } from '../palette/background.colors';
import { gray_100, gray_700 } from '../palette/gray.colors';
import { yellow_400, yellow_900 } from '../palette/yellow.colors';

const menuBarColors: EditorColors = {
  menu: {
    background: background_400,
    foreground: gray_100,
    selectionBackground: yellow_400,
    selectionBorder: yellow_400,
    selectionForeground: yellow_900,
    separatorBackground: gray_700
  },
  menubar: {
    selectionBackground: background_400,
    selectionBorder: background_500,
    selectionForeground: gray_100
  }
};

export default menuBarColors;
