import { UIColors } from '../../types/colors-types';

const titleBarColors: UIColors = (palette) => {
  const { background, neutral } = palette;
  const backgroundColor: string = background[7];

  return {
    titleBar: {
      // Title Bar background when the window is active.
      activeBackground: backgroundColor,

      // Title Bar foreground when the window is active.
      activeForeground: neutral[5],

      // Title Bar background when the window is inactive.
      inactiveBackground: backgroundColor,

      // Title Bar foreground when the window is inactive.
      inactiveForeground: neutral[6],

      // Title bar border color.
      border: background[8]
    }
  };
};

export default titleBarColors;
