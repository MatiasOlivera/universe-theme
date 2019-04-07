import { UIColors } from '../../types/colors-types';

const buttonColors: UIColors = (palette) => {
  const { yellow, gray } = palette;

  return {
    button: {
      background: yellow[3],
      foreground: gray[9],
      hoverBackground: yellow[2]
    }
  };
};

export default buttonColors;
