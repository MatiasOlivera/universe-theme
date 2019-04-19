import { UIColors } from '../../types/colors-types';

// Badges are small information labels, for example, search results count.
const badgeColors: UIColors = (palette) => {
  const { yellow, gray } = palette;

  return {
    badge: {
      // Badge foreground color.
      foreground: gray[9],

      // Badge background color.
      background: yellow[3]
    }
  };
};

export default badgeColors;
