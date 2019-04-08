import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

const panelColors: UIColors = (palette) => {
  const { background, purple, yellow, blueGray } = palette;

  return {
    panel: {
      background: background[6],
      border: background[7],
      dropBackground: `${purple[9]}${opacity_50}`
    },
    panelTitle: {
      activeBorder: yellow[3],
      activeForeground: blueGray[0],
      inactiveForeground: blueGray[2]
    }
  };
};

export default panelColors;
