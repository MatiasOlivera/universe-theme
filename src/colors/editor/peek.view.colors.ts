import { EditorColors } from '../../types/colors-types';
import { background_500, background_600 } from '../palette/background.colors';
import { gray_100, gray_200 } from '../palette/gray.colors';
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
    background: background_500,
    fileForeground: gray_100,
    lineForeground: gray_200,
    matchHighlightBackground: purple_800,
    selectionBackground: purple_700,
    selectionForeground: purple_100
  },
  peekViewTitle: {
    background: background_600
  },
  peekViewTitleDescription: {
    foreground: gray_200
  },
  peekViewTitleLabel: {
    foreground: gray_100
  }
};

export default peekViewColors;
