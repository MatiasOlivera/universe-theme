import { EditorColors } from '../../types/colors-types';
import { background_600, background_700 } from '../palette/background.colors';
import { gray_100, gray_200, gray_600, gray_800 } from '../palette/gray.colors';
import { purple_100, purple_600, purple_700, purple_800 } from '../palette/purple.colors';
import { yellow_400, yellow_900 } from '../palette/yellow.colors';

const editorColors: EditorColors = {
  editor: {
    background: background_600,
    findMatchBackground: purple_700,
    findMatchBorder: purple_600,
    findMatchHighlightBackground: purple_800,
    findMatchHighlightBorder: purple_600,
    findRangeHighlightBackground: purple_700,
    findRangeHighlightBorder: purple_600,
    foreground: gray_100,
    hoverHighlightBackground: purple_700,
    inactiveSelectionBackground: purple_800,
    lineHighlightBackground: background_700,
    rangeHighlightBackground: purple_700,
    rangeHighlightBorder: purple_600,
    selectionBackground: purple_700,
    selectionForeground: purple_100,
    selectionHighlightBackground: purple_700,
    selectionHighlightBorder: purple_600,
    wordHighlightBackground: purple_700,
    wordHighlightBorder: purple_600,
    wordHighlightStrongBackground: purple_700,
    wordHighlightStrongBorder: purple_600
  },
  editorBracketMatch: {
    background: purple_700,
    border: purple_700
  },
  editorCodeLens: {
    foreground: gray_200
  },
  editorCursor: {
    background: yellow_900,
    foreground: yellow_400
  },
  editorIndentGuide: {
    activeBackground: gray_600,
    background: gray_800
  },
  editorLineNumber: {
    activeForeground: gray_200,
    foreground: gray_600
  },
  editorLink: {
    activeForeground: purple_100
  },
  editorRuler: {
    foreground: gray_800
  },
  editorUnnecessaryCode: {
    opacity: '#000000c0'
  },
  editorWhitespace: {
    foreground: gray_600
  }
};

export default editorColors;
