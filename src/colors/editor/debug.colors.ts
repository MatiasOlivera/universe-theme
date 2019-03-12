import { EditorColors } from '../../types/colors-types';
import { violet_6 } from '../palette/violet.colors';

const debugColors: EditorColors = {
  debugToolBar: {
    background: '#233345',
    border: '#233345'
  },
  editor: {
    focusedStackFrameHighlightBackground: violet_6,
    stackFrameHighlightBackground: violet_6
  }
};

export default debugColors;
