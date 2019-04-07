import { UIColors } from '../../types/colors-types';
import { editorTokens } from './editor.colors';

const terminalColors: UIColors = (palette) => {
  const { background, gray, purple, white } = palette;
  const { highlightOpacity } = editorTokens(palette);

  return {
    terminal: {
      ansiBlack: '#263238',
      ansiBlue: '#82AAFF',
      ansiBrightBlack: '#546E7A',
      ansiBrightBlue: '#82AAFF',
      ansiBrightCyan: '#89DDFF',
      ansiBrightGreen: '#C3E88D',
      ansiBrightMagenta: '#C792EA',
      ansiBrightRed: '#F07178',
      ansiBrightWhite: white,
      ansiBrightYellow: '#FFCB6B',
      ansiCyan: '#89DDFF',
      ansiGreen: '#C3E88D',
      ansiMagenta: '#C792EA',
      ansiRed: '#F07178',
      ansiWhite: '#EEFFFF',
      ansiYellow: '#FFCB6B',
      background: background[6],
      border: background[7],
      foreground: gray[0],
      selectionBackground: `${purple[5]}${highlightOpacity}`
    },
    terminalCursor: {
      background: purple[6],
      foreground: purple[0]
    }
  };
};

export default terminalColors;
