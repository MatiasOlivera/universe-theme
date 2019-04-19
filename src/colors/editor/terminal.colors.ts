import { UIColors } from '../../types/colors-types';
import { editorTokens } from './editor.colors';

const terminalColors: UIColors = (palette) => {
  const {
    background,
    gray,
    deepPurple,
    blue,
    teal,
    green,
    red,
    yellow
  } = palette;
  const { highlightOpacity } = editorTokens(palette);

  return {
    terminal: {
      ansiBlack: gray[9],
      ansiBrightBlack: gray[8],
      ansiWhite: gray[1],
      ansiBrightWhite: gray[0],
      ansiBlue: blue[3],
      ansiBrightBlue: blue[2],
      ansiCyan: teal[3],
      ansiBrightCyan: teal[2],
      ansiGreen: green[3],
      ansiBrightGreen: green[2],
      ansiMagenta: deepPurple[3],
      ansiBrightMagenta: deepPurple[2],
      ansiRed: red[3],
      ansiBrightRed: red[2],
      ansiYellow: yellow[3],
      ansiBrightYellow: yellow[2],
      background: background[6],
      border: background[7],
      foreground: gray[0],
      selectionBackground: `${deepPurple[5]}${highlightOpacity}`
    },
    terminalCursor: {
      background: deepPurple[6],
      foreground: deepPurple[0]
    }
  };
};

export default terminalColors;
