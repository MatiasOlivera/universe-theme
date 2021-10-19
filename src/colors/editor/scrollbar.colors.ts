import { UIColors } from '../../types/colors-types';
import { opacity_40, opacity_50, opacity_60 } from '../opacity';

const scrollbarColors: UIColors = (palette) => {
  const { background } = palette;

  return {
    scrollbar: {
      // Scrollbar slider shadow to indicate that the view is scrolled.
      shadow: background[6]
    },

    scrollbarSlider: {
      // Scrollbar slider background color when clicked on.
      activeBackground: `${background[0]}${opacity_60}`,

      // Scrollbar slider background color.
      background: `${background[0]}${opacity_50}`,

      // Scrollbar slider background color when hovering.
      hoverBackground: `${background[0]}${opacity_40}`
    }
  };
};

export default scrollbarColors;
