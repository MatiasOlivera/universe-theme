import { EditorColors } from '../../types/colors-types';
import { background_600, background_700 } from '../palette/background.colors';
import { gray_100, gray_200, gray_500 } from '../palette/gray.colors';
import { purple_100, purple_500, purple_600, purple_700, purple_800 } from '../palette/purple.colors';

const peekViewColors: EditorColors = {
  peekView: {
    border: purple_500
  },
  peekViewEditor: {
    background: background_600,
    matchHighlightBackground: purple_700,
    matchHighlightBorder: purple_600
  },
  peekViewEditorGutter: {
    background: background_600
  },
  peekViewResult: {
    background: background_700,
    fileForeground: gray_100,
    lineForeground: gray_200,
    matchHighlightBackground: purple_800,
    selectionBackground: purple_700,
    selectionForeground: purple_100
  },
  peekViewTitle: {
    background: background_700
  },
  peekViewTitleDescription: {
    foreground: gray_500
  },
  peekViewTitleLabel: {
    foreground: gray_200
  }
};

export default peekViewColors;
