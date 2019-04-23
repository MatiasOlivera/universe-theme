import { UIColors } from '../../types/colors-types';

// Badges are small information labels, for example, search results count.
const badgeColors: UIColors = (palette) => {
  const { background, blueGray } = palette;

  return {
    badge: {
      // Badge foreground color.
      foreground: blueGray[1],

      // Badge background color.
      background: background[2]
    }
  };
};

export default badgeColors;
