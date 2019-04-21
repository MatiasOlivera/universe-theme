import { UIColors } from '../../types/colors-types';
import { opacity_80 } from '../opacity';

const terminalColors: UIColors = (palette) => {
  const {
    background,
    gray,
    deepPurple,
    blue,
    cyan,
    green,
    red,
    yellow
  } = palette;

  return {
    terminal: {
      // 'Black' ANSI color in the terminal.
      ansiBlack: gray[9],

      // 'BrightBlack' ANSI color in the terminal.
      ansiBrightBlack: gray[8],

      // 'White' ANSI color in the terminal.
      ansiWhite: gray[1],

      // 'BrightWhite' ANSI color in the terminal.
      ansiBrightWhite: gray[0],

      // 'Blue' ANSI color in the terminal.
      ansiBlue: blue[3],

      // 'BrightBlue' ANSI color in the terminal.
      ansiBrightBlue: blue[2],

      // 'Cyan' ANSI color in the terminal.
      ansiCyan: cyan[3],

      // 'BrightCyan' ANSI color in the terminal.
      ansiBrightCyan: cyan[2],

      // 'Green' ANSI color in the terminal.
      ansiGreen: green[3],

      // 'BrightGreen' ANSI color in the terminal.
      ansiBrightGreen: green[2],

      // 'Magenta' ANSI color in the terminal.
      ansiMagenta: deepPurple[3],

      // 'BrightMagenta' ANSI color in the terminal.
      ansiBrightMagenta: deepPurple[2],

      // 'Red' ANSI color in the terminal.
      ansiRed: red[3],

      // 'BrightRed' ANSI color in the terminal.
      ansiBrightRed: red[2],

      // 'Yellow' ANSI color in the terminal.
      ansiYellow: yellow[3],

      // 'BrightYellow' ANSI color in the terminal.
      ansiBrightYellow: yellow[2],

      // The background of the Integrated Terminal's viewport.
      background: background[6],

      // The color of the border that separates split panes within the terminal. This defaults to panel.border.
      border: background[7],

      // The default foreground color of the Integrated Terminal.
      foreground: gray[0],

      // The selection background color of the terminal.
      selectionBackground: `${background[0]}${opacity_80}`
    },

    terminalCursor: {
      // The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
      background: deepPurple[6],

      // The foreground color of the terminal cursor.
      foreground: deepPurple[0]
    }
  };
};

export default terminalColors;
