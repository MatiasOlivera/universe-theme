import { EditorColors } from '../../types/colors-types';
import { background_4, background_5 } from '../palette/background.colors';
import { slate_0 } from '../palette/slate.colors';

const menuBarColors: EditorColors = {
  menu: {
    background: background_4,
    foreground: slate_0,
    selectionBackground: '#f4da55',
    selectionBorder: '#f4da55',
    selectionForeground: '#3d2e12',
    separatorBackground: '#151f2b'
  },
  menubar: {
    selectionBackground: background_4,
    selectionBorder: background_5,
    selectionForeground: slate_0
  }
};

export default menuBarColors;
