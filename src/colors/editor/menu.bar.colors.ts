import { EditorColors } from '../../types/colors-types';
import { background_4, background_5, background_6 } from '../palette/background.colors';
import { slate_0 } from '../palette/slate.colors';
import { yellow_3, yellow_9 } from '../palette/yellow.colors';

const menuBarColors: EditorColors = {
  menu: {
    background: background_4,
    foreground: slate_0,
    selectionBackground: yellow_3,
    selectionBorder: yellow_3,
    selectionForeground: yellow_9,
    separatorBackground: background_6
  },
  menubar: {
    selectionBackground: background_4,
    selectionBorder: background_5,
    selectionForeground: slate_0
  }
};

export default menuBarColors;
