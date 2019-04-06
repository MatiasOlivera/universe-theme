import { UIColors } from '../../types/colors-types';

const baseColors: UIColors = (palette) => {
  const { red, gray, yellow, purple } = palette;

  return {
    descriptionForeground: gray[1],
    errorForeground: red[1],
    focusBorder: yellow[3],
    foreground: gray[1],
    selection: {
      background: purple[5]
    }
  };
};

export default baseColors;
