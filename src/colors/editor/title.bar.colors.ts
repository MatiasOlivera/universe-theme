import { UIColors } from '../../types/colors-types';

const titleBarColors: UIColors = (palette) => {
  const { background, blueGray } = palette;

  return {
    titleBar: {
      // Title Bar background when the window is active.
      activeBackground: background[7],

      // Title Bar foreground when the window is active.
      activeForeground: blueGray[2],

      // Title Bar background when the window is inactive.
      inactiveBackground: background[7],

      // Title Bar foreground when the window is inactive.
      inactiveForeground: blueGray[3],

      // Title bar border color.
      border: background[8]
    }
  };
};

export default titleBarColors;
