import { EditorColors } from '../../types/colors-types';
import { violet_0, violet_5, violet_7 } from '../palette/violet.colors';

const terminalColors: EditorColors = {
  terminal: {
    ansiBlack: '#263238',
    ansiBlue: '#82AAFF',
    ansiBrightBlack: '#546E7A',
    ansiBrightBlue: '#82AAFF',
    ansiBrightCyan: '#89DDFF',
    ansiBrightGreen: '#C3E88D',
    ansiBrightMagenta: '#C792EA',
    ansiBrightRed: '#F07178',
    ansiBrightWhite: '#FFFFFF',
    ansiBrightYellow: '#FFCB6B',
    ansiCyan: '#89DDFF',
    ansiGreen: '#C3E88D',
    ansiMagenta: '#C792EA',
    ansiRed: '#F07178',
    ansiWhite: '#EEFFFF',
    ansiYellow: '#FFCB6B',
    background: '#151f2b',
    border: '#0f161e',
    foreground: '#f6f8fa',
    selectionBackground: violet_5
  },
  terminalCursor: {
    background: violet_7,
    foreground: violet_0
  }
};

export default terminalColors;
