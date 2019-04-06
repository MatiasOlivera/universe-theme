import { UIColors } from '../../types/colors-types';

const buttonColors: UIColors = (palette) => {
  const { yellow } = palette;

  return {
    button: {
      background: yellow[3],
      foreground: yellow[8],
      hoverBackground: yellow[2]
    }
  };
};

export default buttonColors;
