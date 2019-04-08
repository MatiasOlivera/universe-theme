import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const debugColors: UIColors = (palette) => {
  const { purple } = palette;
  const { dialogBackground } = dialogTokens(palette);

  return {
    debugToolBar: {
      background: dialogBackground,
      border: dialogBackground
    },
    editor: {
      focusedStackFrameHighlightBackground: purple[5],
      stackFrameHighlightBackground: purple[5]
    }
  };
};

export default debugColors;
