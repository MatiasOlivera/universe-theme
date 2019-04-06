import { UIColors } from '../../types/colors-types';

const badgeColors: UIColors = (palette) => {
  const { yellow } = palette;

  return {
    badge: {
      foreground: yellow[8],
      background: yellow[3]
    }
  };
};

export default badgeColors;
