import { UIColors } from '../../types/colors-types';
import { opacity_40, opacity_50, opacity_60 } from '../opacity';

const scrollbarColors: UIColors = (palette) => {
  const { background, deepPurple } = palette;

  return {
    scrollbar: {
      shadow: background[6]
    },
    scrollbarSlider: {
      activeBackground: `${deepPurple[5]}${opacity_60}`,
      background: `${deepPurple[6]}${opacity_50}`,
      hoverBackground: `${deepPurple[5]}${opacity_40}`
    }
  };
};

export default scrollbarColors;
