import { EditorColors } from '../../types/colors-types';
import { slate_3 } from '../palette/slate.colors';
import { violet_8, violet_9 } from '../palette/violet.colors';

const statusBarColors: EditorColors = {
  statusBar: {
    background: '#0f161e',
    border: '#080c11',
    debuggingBackground: '#0f161e',
    debuggingBorder: '#080c11',
    debuggingForeground: slate_3,
    foreground: slate_3,
    noFolderBackground: '#0f161e',
    noFolderBorder: '#080c11',
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
