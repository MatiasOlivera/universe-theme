import { UIColors } from '../../types/colors-types';
import { opacity_30 } from '../palette/opacity';

const diffColors: UIColors = (palette) => {
  const { background, green, red } = palette;

  return {
    diffEditor: {
      insertedTextBackground: `${green[8]}${opacity_30}`,
      removedTextBackground: `${red[8]}${opacity_30}`,
      border: background[6]
    }
  };
};

export default diffColors;
