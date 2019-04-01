import { EditorColors } from '../../types/colors-types';
import { gray_100, gray_700 } from '../palette/gray.colors';
import { yellow_400, yellow_900 } from '../palette/yellow.colors';
import { modalBackground, modalBorder } from './modal.colors';

const menuBarColors: EditorColors = {
  menu: {
    background: modalBackground,
    foreground: gray_100,
    selectionBackground: yellow_400,
    selectionBorder: yellow_400,
    selectionForeground: yellow_900,
    separatorBackground: gray_700
  },
  menubar: {
    selectionBackground: modalBackground,
    selectionBorder: modalBackground,
    selectionForeground: gray_100
  }
};

export default menuBarColors;
