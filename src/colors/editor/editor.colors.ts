import { EditorColors } from '../../types/colors-types';
import { background_0, background_1, background_5, background_6 } from '../palette/background.colors';
import { purple_100, purple_600, purple_700, purple_800 } from '../palette/purple.colors';
import { slate_0, slate_1, slate_5 } from '../palette/slate.colors';
import { yellow_400, yellow_900 } from '../palette/yellow.colors';

const editorColors: EditorColors = {
  editor: {
    background: background_5,
    findMatchBackground: purple_700,
    findMatchBorder: purple_600,
    findMatchHighlightBackground: purple_800,
    findMatchHighlightBorder: purple_600,
    findRangeHighlightBackground: purple_700,
    findRangeHighlightBorder: purple_600,
    foreground: slate_0,
    hoverHighlightBackground: purple_700,
    inactiveSelectionBackground: purple_800,
    lineHighlightBackground: background_6,
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
    foreground: slate_1
  },
  editorCursor: {
    background: yellow_900,
    foreground: yellow_400
  },
  editorIndentGuide: {
    activeBackground: background_0,
    background: background_1
  },
  editorLineNumber: {
    activeForeground: slate_1,
    foreground: slate_5
  },
  editorLink: {
    activeForeground: purple_100
  },
  editorRuler: {
    foreground: background_1
  },
  editorUnnecessaryCode: {
    opacity: '#000000c0'
  },
  editorWhitespace: {
    foreground: slate_5
  }
};

export default editorColors;
