import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const debugColors: UIColors = (palette) => {
  const { deepPurple } = palette;
  const { dialogBackground } = dialogTokens(palette);

  return {
    debugToolBar: {
      background: dialogBackground,
      border: dialogBackground
    },
    editor: {
      focusedStackFrameHighlightBackground: deepPurple[5],
      stackFrameHighlightBackground: deepPurple[5]
    }
  };
};

export default debugColors;
