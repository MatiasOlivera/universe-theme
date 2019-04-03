import { EditorColors } from '../../types/colors-types';
import { gray_100, gray_700 } from '../palette/gray.colors';
import { yellow_400, yellow_900 } from '../palette/yellow.colors';
import { dialogBackground, dialogBorder } from './dialog.colors';

const menuBarColors: EditorColors = {
  menu: {
    background: dialogBackground,
    foreground: gray_100,
    selectionBackground: yellow_400,
    selectionBorder: yellow_400,
    selectionForeground: yellow_900,
    separatorBackground: gray_700
  },
  menubar: {
    selectionBackground: dialogBackground,
    selectionBorder: dialogBackground,
    selectionForeground: gray_100
  }
};

export default menuBarColors;
