import { UIColors } from '../../types/colors-types';

const baseColors: UIColors = (palette) => {
  const { red, blueGray, yellow, purple } = palette;

  return {
    descriptionForeground: blueGray[3],
    errorForeground: red[1],
    focusBorder: yellow[3],
    foreground: blueGray[1],
    selection: {
      background: purple[5]
    }
  };
};

export default baseColors;
