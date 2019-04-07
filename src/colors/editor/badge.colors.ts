import { UIColors } from '../../types/colors-types';

const badgeColors: UIColors = (palette) => {
  const { yellow, gray } = palette;

  return {
    badge: {
      foreground: gray[9],
      background: yellow[3]
    }
  };
};

export default badgeColors;
