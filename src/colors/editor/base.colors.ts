import { UIColors } from '../../types/colors-types';

const baseColors: UIColors = (palette) => {
  const { red, blueGray, yellow, deepPurple } = palette;

  return {
    descriptionForeground: blueGray[3],
    errorForeground: red[1],
    focusBorder: yellow[3],
    foreground: blueGray[1],
    selection: {
      background: deepPurple[5]
    }
  };
};

export default baseColors;
