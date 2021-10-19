import { UIColors } from '../../types/colors-types';
import { opacity_10 } from '../opacity';

// For coloring inserted and removed text, use either a background or a border
// color but not both.
const diffColors: UIColors = (palette) => {
  const { background, red, green } = palette;

  return {
    diffEditor: {
      // Background color for text that got inserted. The color must not be
      // opaque so as not to hide underlying decorations.
      insertedTextBackground: `${green[4]}${opacity_10}`,

      // Background color for text that got removed. The color must not be
      // opaque so as not to hide underlying decorations.
      removedTextBackground: `${red[4]}${opacity_10}`,

      // Border color between the two text editors.
      border: background[6]
    }
  };
};

export default diffColors;
