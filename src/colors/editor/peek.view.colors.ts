import { EditorColors } from '../../types/colors-types';
import { background_4, background_5 } from '../palette/background.colors';
import { purple_100, purple_500, purple_600, purple_700, purple_800 } from '../palette/purple.colors';
import { slate_0, slate_1 } from '../palette/slate.colors';

const peekViewColors: EditorColors = {
  peekView: {
    border: purple_500
  },
  peekViewEditor: {
    background: background_5,
    matchHighlightBackground: purple_700,
    matchHighlightBorder: purple_600
  },
  peekViewEditorGutter: {
    background: background_5
  },
  peekViewResult: {
    background: background_4,
    fileForeground: slate_0,
    lineForeground: slate_1,
    matchHighlightBackground: purple_800,
    selectionBackground: purple_700,
    selectionForeground: purple_100
  },
  peekViewTitle: {
    background: background_5
  },
  peekViewTitleDescription: {
    foreground: slate_1
  },
  peekViewTitleLabel: {
    foreground: slate_0
  }
};

export default peekViewColors;
