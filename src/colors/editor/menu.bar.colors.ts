import { EditorColors } from '../../types/colors-types';
import { background_4, background_5, background_6 } from '../palette/background.colors';
import { slate_0 } from '../palette/slate.colors';
import { yellow_400, yellow_900 } from '../palette/yellow.colors';

const menuBarColors: EditorColors = {
  menu: {
    background: background_4,
    foreground: slate_0,
    selectionBackground: yellow_400,
    selectionBorder: yellow_400,
    selectionForeground: yellow_900,
    separatorBackground: background_6
  },
  menubar: {
    selectionBackground: background_4,
    selectionBorder: background_5,
    selectionForeground: slate_0
  }
};

export default menuBarColors;
