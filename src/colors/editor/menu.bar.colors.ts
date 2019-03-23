import { EditorColors } from '../../types/colors-types';
import { background_500, background_600, background_700 } from '../palette/background.colors';
import { slate_0 } from '../palette/slate.colors';
import { yellow_400, yellow_900 } from '../palette/yellow.colors';

const menuBarColors: EditorColors = {
  menu: {
    background: background_500,
    foreground: slate_0,
    selectionBackground: yellow_400,
    selectionBorder: yellow_400,
    selectionForeground: yellow_900,
    separatorBackground: background_700
  },
  menubar: {
    selectionBackground: background_500,
    selectionBorder: background_600,
    selectionForeground: slate_0
  }
};

export default menuBarColors;
