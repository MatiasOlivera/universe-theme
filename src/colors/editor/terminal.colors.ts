import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';
import { selectionTokens } from './editor.colors';

const terminalColors: UIColors = (palette) => {
  const {
    background,
    neutral,
    deepPurple,
    blue,
    cyan,
    lightGreen,
    red,
    yellow,
    secondary
  } = palette;
  const { selectionColor } = selectionTokens(palette);

  const normalSwatch: number = 3;
  const brightSwatch: number = 2;

  return {
    terminal: {
      // 'Black' ANSI color in the terminal.
      ansiBlack: neutral[9],

      // 'BrightBlack' ANSI color in the terminal.
      ansiBrightBlack: neutral[8],

      // 'White' ANSI color in the terminal.
      ansiWhite: neutral[2],

      // 'BrightWhite' ANSI color in the terminal.
      ansiBrightWhite: neutral[1],

      // 'Blue' ANSI color in the terminal.
      ansiBlue: blue[normalSwatch],

      // 'BrightBlue' ANSI color in the terminal.
      ansiBrightBlue: blue[brightSwatch],

      // 'Cyan' ANSI color in the terminal.
      ansiCyan: cyan[normalSwatch],

      // 'BrightCyan' ANSI color in the terminal.
      ansiBrightCyan: cyan[brightSwatch],

      // 'Green' ANSI color in the terminal.
      ansiGreen: lightGreen[normalSwatch],

      // 'BrightGreen' ANSI color in the terminal.
      ansiBrightGreen: lightGreen[brightSwatch],

      // 'Magenta' ANSI color in the terminal.
      ansiMagenta: deepPurple[normalSwatch],

      // 'BrightMagenta' ANSI color in the terminal.
      ansiBrightMagenta: deepPurple[brightSwatch],

      // 'Red' ANSI color in the terminal.
      ansiRed: red[normalSwatch],

      // 'BrightRed' ANSI color in the terminal.
      ansiBrightRed: red[brightSwatch],

      // 'Yellow' ANSI color in the terminal.
      ansiYellow: yellow[normalSwatch],

      // 'BrightYellow' ANSI color in the terminal.
      ansiBrightYellow: yellow[brightSwatch],

      // The background of the Integrated Terminal's viewport.
      background: background[6],

      // The color of the border that separates split panes within the terminal. This defaults to panel.border.
      border: background[7],

      // The default foreground color of the Integrated Terminal.
      foreground: neutral[2],

      // The selection background color of the terminal.
      selectionBackground: `${selectionColor}${opacity_50}`
    },

    terminalCursor: {
      // The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
      background: secondary[9],

      // The foreground color of the terminal cursor.
      foreground: secondary[3]
    }
  };
};

export default terminalColors;
