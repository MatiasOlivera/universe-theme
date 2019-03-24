import { EditorColors } from '../../types/colors-types';
import { background_800, background_900 } from '../palette/background.colors';
import { gray_400 } from '../palette/gray.colors';
import { purple_800, purple_900 } from '../palette/purple.colors';

const statusBarColors: EditorColors = {
  statusBar: {
    background: background_800,
    border: background_900,
    debuggingBackground: background_800,
    debuggingBorder: background_900,
    debuggingForeground: gray_400,
    foreground: gray_400,
    noFolderBackground: background_800,
    noFolderBorder: background_900,
    noFolderForeground: gray_400
  },
  statusBarItem: {
    activeBackground: purple_900,
    hostBackground: purple_900,
    hoverBackground: purple_800,
    prominentBackground: purple_900,
    prominentHoverBackground: purple_800
  }
};

export default statusBarColors;
