import { UIColors } from '../../types/colors-types';

const buttonColors: UIColors = (palette) => {
  const { yellow, black } = palette;

  return {
    button: {
      background: yellow[3],
      foreground: black,
      hoverBackground: yellow[2]
    }
  };
};

export default buttonColors;
