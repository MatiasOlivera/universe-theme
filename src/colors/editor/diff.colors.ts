import { UIColors } from '../../types/colors-types';
import { opacity_20 } from '../opacity';

const diffColors: UIColors = (palette) => {
  const { background, green, red } = palette;

  return {
    diffEditor: {
      insertedTextBackground: `${green[9]}${opacity_20}`,
      removedTextBackground: `${red[9]}${opacity_20}`,
      border: background[6]
    }
  };
};

export default diffColors;
