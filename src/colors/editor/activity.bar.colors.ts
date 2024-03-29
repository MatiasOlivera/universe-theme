import { UIColors } from '../../types/colors-types';

// The Activity Bar is displayed either on the far left or right of the
// workbench and allows fast switching between views of the Side Bar.
const activityBarColors: UIColors = (palette) => {
  const { secondary, background, neutral } = palette;

  return {
    activityBar: {
      // Activity Bar background color.
      background: background[7],

      // Drag and drop feedback color for the Activity Bar items.
      dropBackground: background[8],

      // Activity bar foreground color (for example used for the icons).
      foreground: neutral[6],

      // Activity bar item foreground color when it is inactive.
      inactiveForeground: neutral[8],

      // Activity Bar border color with the Side Bar.
      border: background[8]
    },

    activityBarBadge: {
      // Activity notification badge background color.
      background: secondary[4],

      // Activity notification badge foreground color.
      foreground: secondary[9]
    }
  };
};

export default activityBarColors;
