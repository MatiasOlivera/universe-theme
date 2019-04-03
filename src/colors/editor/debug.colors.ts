import { EditorColors } from '../../types/colors-types';
import { purple_600 } from '../palette/purple.colors';
import { dialogBackground } from './dialog.colors';

const debugColors: EditorColors = {
  debugToolBar: {
    background: dialogBackground,
    border: dialogBackground
  },
  editor: {
    focusedStackFrameHighlightBackground: purple_600,
    stackFrameHighlightBackground: purple_600
  }
};

export default debugColors;
