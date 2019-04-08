import { UIColors } from '../../types/colors-types';
import { opacity_60, opacity_50, opacity_40 } from '../opacity';

const scrollbarColors: UIColors = (palette) => {
  const { background, purple } = palette;

  return {
    scrollbar: {
      shadow: background[6]
    },
    scrollbarSlider: {
      activeBackground: `${purple[5]}${opacity_60}`,
      background: `${purple[6]}${opacity_50}`,
      hoverBackground: `${purple[5]}${opacity_40}`
    }
  };
};

export default scrollbarColors;
