import { EditorColors } from '../../types/colors-types';
import { background_0, background_1, background_5 } from '../palette/background.colors';
import { slate_0, slate_1, slate_5 } from '../palette/slate.colors';
import { violet_0, violet_6, violet_7, violet_8 } from '../palette/violet.colors';

const editorColors: EditorColors = {
  editor: {
    background: background_5,
    findMatchBackground: violet_7,
    findMatchBorder: violet_6,
    findMatchHighlightBackground: violet_8,
    findMatchHighlightBorder: violet_6,
    findRangeHighlightBackground: violet_7,
    findRangeHighlightBorder: violet_6,
    foreground: slate_0,
    hoverHighlightBackground: violet_7,
    inactiveSelectionBackground: violet_8,
    lineHighlightBackground: '#151f2b',
    rangeHighlightBackground: violet_7,
    rangeHighlightBorder: violet_6,
    selectionBackground: violet_7,
    selectionForeground: violet_0,
    selectionHighlightBackground: violet_7,
    selectionHighlightBorder: violet_6,
    wordHighlightBackground: violet_7,
    wordHighlightBorder: violet_6,
    wordHighlightStrongBackground: violet_7,
    wordHighlightStrongBorder: violet_6
  },
  editorBracketMatch: {
    background: violet_7,
    border: violet_7
  },
  editorCodeLens: {
    foreground: slate_1
  },
  editorCursor: {
    background: '#3d2e12',
    foreground: '#f4da55'
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
    activeForeground: violet_0
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
