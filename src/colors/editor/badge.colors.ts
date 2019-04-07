import { UIColors } from '../../types/colors-types';

const badgeColors: UIColors = (palette) => {
  const { yellow, black } = palette;

  return {
    badge: {
      foreground: black,
      background: yellow[3]
    }
  };
};

export default badgeColors;
