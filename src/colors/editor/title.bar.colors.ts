import { UIColors } from '../../types/colors-types';

const titleBarColors: UIColors = (palette) => {
  const { background, blueGray } = palette;

  return {
    titleBar: {
      activeBackground: background[7],
      activeForeground: blueGray[1],
      border: background[8],
      inactiveBackground: background[7],
      inactiveForeground: blueGray[3]
    }
  };
};

export default titleBarColors;
