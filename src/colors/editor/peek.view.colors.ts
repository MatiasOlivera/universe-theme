import { EditorColors } from '../../types/colors-types';
import { violet_0, violet_4, violet_6, violet_7, violet_8 } from '../palette/violet.colors';

const peekViewColors: EditorColors = {
  peekView: {
    border: violet_4
  },
  peekViewEditor: {
    background: '#1c2938',
    matchHighlightBackground: violet_7,
    matchHighlightBorder: violet_6
  },
  peekViewEditorGutter: {
    background: '#1c2938'
  },
  peekViewResult: {
    background: '#233345',
    fileForeground: '#f6f8fa',
    lineForeground: '#d4dae1',
    matchHighlightBackground: violet_8,
    selectionBackground: violet_7,
    selectionForeground: violet_0
  },
  peekViewTitle: {
    background: '#1c2938'
  },
  peekViewTitleDescription: {
    foreground: '#d4dae1'
  },
  peekViewTitleLabel: {
    foreground: '#f6f8fa'
  }
};

export default peekViewColors;
