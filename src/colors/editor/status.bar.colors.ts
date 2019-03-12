import { EditorColors } from '../../types/colors-types';
import { background_7, background_8 } from '../palette/background.colors';
import { slate_3 } from '../palette/slate.colors';
import { violet_8, violet_9 } from '../palette/violet.colors';

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
    activeBackground: violet_9,
    hostBackground: violet_9,
    hoverBackground: violet_8,
    prominentBackground: violet_9,
    prominentHoverBackground: violet_8
  }
};

export default statusBarColors;
