import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const debugColors: UIColors = (palette) => {
  const { deepPurple } = palette;
  const { dialogBackground } = dialogTokens(palette);

  return {
    debugToolBar: {
      // Debug toolbar background color.
      background: dialogBackground,

      // Debug toolbar border color.
      border: dialogBackground
    },

    editor: {
      // Background color of the top stack frame highlight in the editor.
      stackFrameHighlightBackground: deepPurple[5],

      // Background color of the focused stack frame highlight in the editor.
      focusedStackFrameHighlightBackground: deepPurple[5]
    }
  };
};

export default debugColors;
