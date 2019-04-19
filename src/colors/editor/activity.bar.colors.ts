import { UIColors } from '../../types/colors-types';

const activityBarColors: UIColors = (palette) => {
  const { background, deepPurple, yellow, blueGray } = palette;

  return {
    activityBar: {
      background: background[7],
      dropBackground: deepPurple[8],
      foreground: yellow[3],
      inactiveForeground: blueGray[7],
      border: background[8]
    },
    activityBarBadge: {
      background: deepPurple[6],
      foreground: deepPurple[0]
    }
  };
};

export default activityBarColors;
