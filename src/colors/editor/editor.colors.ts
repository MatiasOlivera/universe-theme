import { ColorPalettes, UIColors } from '../../types/colors-types';
import { opacity_50, opacity_80 } from '../opacity';

interface EditorTokens {
  highlightOpacity: string;
}

export const editorTokens = (palette: ColorPalettes): EditorTokens => {
  return {
    highlightOpacity: opacity_50
  };
};

const editorColors: UIColors = (palette) => {
  const { background, deepPurple, yellow, blueGray } = palette;
  const { highlightOpacity } = editorTokens(palette);

  return {
    editor: {
      background: background[5],
      findMatchBackground: deepPurple[6],
      findMatchBorder: deepPurple[5],
      findMatchHighlightBackground: `${deepPurple[7]}${highlightOpacity}`,
      findMatchHighlightBorder: deepPurple[5],
      findRangeHighlightBackground: `${deepPurple[6]}${highlightOpacity}`,
      findRangeHighlightBorder: deepPurple[5],
      foreground: blueGray[0],
      hoverHighlightBackground: `${deepPurple[6]}${highlightOpacity}`,
      inactiveSelectionBackground: `${deepPurple[7]}${highlightOpacity}`,
      lineHighlightBackground: background[6],
      rangeHighlightBackground: `${deepPurple[6]}${highlightOpacity}`,
      rangeHighlightBorder: deepPurple[5],
      selectionBackground: deepPurple[6],
      selectionForeground: deepPurple[0],
      selectionHighlightBackground: `${deepPurple[6]}${highlightOpacity}`,
      selectionHighlightBorder: deepPurple[5],
      wordHighlightBackground: `${deepPurple[6]}${highlightOpacity}`,
      wordHighlightBorder: deepPurple[5],
      wordHighlightStrongBackground: `${deepPurple[6]}${highlightOpacity}`,
      wordHighlightStrongBorder: deepPurple[5]
    },
    editorBracketMatch: {
      background: deepPurple[6],
      border: deepPurple[6]
    },
    editorCodeLens: {
      foreground: blueGray[1]
    },
    editorCursor: {
      background: yellow[9],
      foreground: yellow[3]
    },
    editorIndentGuide: {
      activeBackground: blueGray[6],
      background: blueGray[8]
    },
    editorLineNumber: {
      activeForeground: blueGray[1],
      foreground: blueGray[5]
    },
    editorLink: {
      activeForeground: deepPurple[0]
    },
    editorRuler: {
      foreground: blueGray[8]
    },
    editorUnnecessaryCode: {
      opacity: `${blueGray[0]}${opacity_80}`
    },
    editorWhitespace: {
      foreground: blueGray[5]
    }
  };
};

export default editorColors;
