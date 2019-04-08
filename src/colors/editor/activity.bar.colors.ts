import { UIColors } from '../../types/colors-types';

const activityBarColors: UIColors = (palette) => {
  const { background, purple, yellow, blueGray } = palette;

  return {
    activityBar: {
      background: background[7],
      dropBackground: purple[8],
      foreground: yellow[3],
      inactiveForeground: blueGray[7],
      border: background[8]
    },
    activityBarBadge: {
      background: purple[6],
      foreground: purple[0]
    }
  };
};

export default activityBarColors;
