import { UIColors } from '../../types/colors-types';

const titleBarColors: UIColors = (palette) => {
  const { background, blueGray } = palette;
  const backgroundColor: string = background[7];

  return {
    titleBar: {
      // Title Bar background when the window is active.
      activeBackground: backgroundColor,

      // Title Bar foreground when the window is active.
      activeForeground: blueGray[5],

      // Title Bar background when the window is inactive.
      inactiveBackground: backgroundColor,

      // Title Bar foreground when the window is inactive.
      inactiveForeground: blueGray[6],

      // Title bar border color.
      border: background[8]
    }
  };
};

export default titleBarColors;
