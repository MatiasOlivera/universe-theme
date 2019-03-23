import { EditorColors } from '../../types/colors-types';
import { background_4 } from '../palette/background.colors';
import { purple_600 } from '../palette/purple.colors';

const debugColors: EditorColors = {
  debugToolBar: {
    background: background_4,
    border: background_4
  },
  editor: {
    focusedStackFrameHighlightBackground: purple_600,
    stackFrameHighlightBackground: purple_600
  }
};

export default debugColors;
