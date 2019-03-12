import { EditorColors } from '../../types/colors-types';
import { violet_8, violet_9 } from '../palette/violet.colors';

const statusBarColors: EditorColors = {
  statusBar: {
    background: '#0f161e',
    border: '#080c11',
    debuggingBackground: '#0f161e',
    debuggingBorder: '#080c11',
    debuggingForeground: '#96a2af',
    foreground: '#96a2af',
    noFolderBackground: '#0f161e',
    noFolderBorder: '#080c11',
    noFolderForeground: '#96a2af'
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
