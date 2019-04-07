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
  const { background, purple, blueGray, yellow } = palette;
  const { highlightOpacity } = editorTokens(palette);

  return {
    editor: {
      background: background[5],
      findMatchBackground: purple[6],
      findMatchBorder: purple[5],
      findMatchHighlightBackground: `${purple[7]}${highlightOpacity}`,
      findMatchHighlightBorder: purple[5],
      findRangeHighlightBackground: `${purple[6]}${highlightOpacity}`,
      findRangeHighlightBorder: purple[5],
      foreground: blueGray[0],
      hoverHighlightBackground: `${purple[6]}${highlightOpacity}`,
      inactiveSelectionBackground: `${purple[7]}${highlightOpacity}`,
      lineHighlightBackground: background[6],
      rangeHighlightBackground: `${purple[6]}${highlightOpacity}`,
      rangeHighlightBorder: purple[5],
      selectionBackground: purple[6],
      selectionForeground: purple[0],
      selectionHighlightBackground: `${purple[6]}${highlightOpacity}`,
      selectionHighlightBorder: purple[5],
      wordHighlightBackground: `${purple[6]}${highlightOpacity}`,
      wordHighlightBorder: purple[5],
      wordHighlightStrongBackground: `${purple[6]}${highlightOpacity}`,
      wordHighlightStrongBorder: purple[5]
    },
    editorBracketMatch: {
      background: purple[6],
      border: purple[6]
    },
    editorCodeLens: {
      foreground: blueGray[1]
    },
    editorCursor: {
      background: yellow[8],
      foreground: yellow[3]
    },
    editorIndentGuide: {
      activeBackground: blueGray[5],
      background: blueGray[7]
    },
    editorLineNumber: {
      activeForeground: blueGray[1],
      foreground: blueGray[5]
    },
    editorLink: {
      activeForeground: purple[0]
    },
    editorRuler: {
      foreground: blueGray[7]
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
