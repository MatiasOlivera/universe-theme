import { EditorColors } from '../../types/colors-types';
import { background_7, background_8 } from '../palette/background.colors';
import { purple_800, purple_900 } from '../palette/purple.colors';
import { slate_3 } from '../palette/slate.colors';

const statusBarColors: EditorColors = {
  statusBar: {
    background: background_7,
    border: background_8,
    debuggingBackground: background_7,
    debuggingBorder: background_8,
    debuggingForeground: slate_3,
    foreground: slate_3,
    noFolderBackground: background_7,
    noFolderBorder: background_8,
    noFolderForeground: slate_3
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
