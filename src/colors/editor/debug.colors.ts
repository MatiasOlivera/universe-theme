import { EditorColors } from '../../types/colors-types';
import { background_4 } from '../palette/background.colors';
import { violet_6 } from '../palette/violet.colors';

const debugColors: EditorColors = {
  debugToolBar: {
    background: background_4,
    border: background_4
  },
  editor: {
    focusedStackFrameHighlightBackground: violet_6,
    stackFrameHighlightBackground: violet_6
  }
};

export default debugColors;
