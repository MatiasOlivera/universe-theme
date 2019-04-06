import { UIColors } from '../../types/colors-types';

const titleBarColors: UIColors = (palette) => {
  const { background, gray } = palette;

  return {
    titleBar: {
      activeBackground: background[7],
      activeForeground: gray[1],
      border: background[8],
      inactiveBackground: background[7],
      inactiveForeground: gray[3]
    }
  };
};

export default titleBarColors;
