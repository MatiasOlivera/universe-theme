import { EditorColors } from '../../types/colors-types';
import { violet_0, violet_6, violet_7, violet_8 } from '../palette/violet.colors';

const editorColors: EditorColors = {
  editor: {
    background: '#1c2938',
    findMatchBackground: violet_7,
    findMatchBorder: violet_6,
    findMatchHighlightBackground: violet_8,
    findMatchHighlightBorder: violet_6,
    findRangeHighlightBackground: violet_7,
    findRangeHighlightBorder: violet_6,
    foreground: '#f6f8fa',
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
    foreground: '#d4dae1'
  },
  editorCursor: {
    background: '#3d2e12',
    foreground: '#f4da55'
  },
  editorIndentGuide: {
    activeBackground: '#5076a1',
    background: '#364f6c'
  },
  editorLineNumber: {
    activeForeground: '#d4dae1',
    foreground: '#62717f'
  },
  editorLink: {
    activeForeground: violet_0
  },
  editorRuler: {
    foreground: '#364f6c'
  },
  editorUnnecessaryCode: {
    opacity: '#000000c0'
  },
  editorWhitespace: {
    foreground: '#62717f'
  }
};

export default editorColors;
