import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

const panelColors: UIColors = (palette) => {
  const { background, purple, yellow, gray } = palette;

  return {
    panel: {
      background: background[6],
      border: background[7],
      dropBackground: `${purple[8]}${opacity_50}`
    },
    panelTitle: {
      activeBorder: yellow[3],
      activeForeground: gray[0],
      inactiveForeground: gray[3]
    }
  };
};

export default panelColors;
