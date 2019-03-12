import { EditorColors } from '../../types/colors-types';
import { background_4, background_5 } from '../palette/background.colors';
import { slate_0, slate_1 } from '../palette/slate.colors';
import { violet_0, violet_4, violet_6, violet_7, violet_8 } from '../palette/violet.colors';

const peekViewColors: EditorColors = {
  peekView: {
    border: violet_4
  },
  peekViewEditor: {
    background: background_5,
    matchHighlightBackground: violet_7,
    matchHighlightBorder: violet_6
  },
  peekViewEditorGutter: {
    background: background_5
  },
  peekViewResult: {
    background: background_4,
    fileForeground: slate_0,
    lineForeground: slate_1,
    matchHighlightBackground: violet_8,
    selectionBackground: violet_7,
    selectionForeground: violet_0
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
