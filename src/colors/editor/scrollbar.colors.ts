import { UIColors } from '../../types/colors-types';
import { opacity_40, opacity_50, opacity_60 } from '../opacity';

const scrollbarColors: UIColors = (palette) => {
  const { background, deepPurple } = palette;

  return {
    scrollbar: {
      // Scrollbar slider shadow to indicate that the view is scrolled.
      shadow: background[6]
    },

    scrollbarSlider: {
      // Scrollbar slider background color when clicked on.
      activeBackground: `${deepPurple[5]}${opacity_60}`,

      // Scrollbar slider background color.
      background: `${deepPurple[6]}${opacity_50}`,

      // Scrollbar slider background color when hovering.
      hoverBackground: `${deepPurple[5]}${opacity_40}`
    }
  };
};

export default scrollbarColors;
