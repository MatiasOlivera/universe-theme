import { EditorColors } from '../../types/colors-types';
import { background_800, background_900 } from '../palette/background.colors';
import { purple_800, purple_900 } from '../palette/purple.colors';
import { slate_3 } from '../palette/slate.colors';

const statusBarColors: EditorColors = {
  statusBar: {
    background: background_800,
    border: background_900,
    debuggingBackground: background_800,
    debuggingBorder: background_900,
    debuggingForeground: slate_3,
    foreground: slate_3,
    noFolderBackground: background_800,
    noFolderBorder: background_900,
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
