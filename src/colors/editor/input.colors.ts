import { ColorPalettes, UIColors } from '../../types/colors-types';

interface InputTokens {
  inputBackground: string;
  inputBorder: string;
  inputForeground: string;
}

export const inputTokens = (palette: ColorPalettes): InputTokens => {
  const { background, blueGray } = palette;

  return {
    inputBackground: background[4],
    inputBorder: background[3],
    inputForeground: blueGray[0]
  };
};

const inputColors: UIColors = (palette) => {
  const { blueGray, deepPurple, red, blue, yellow } = palette;
  const { inputBackground, inputBorder, inputForeground } = inputTokens(
    palette
  );

  return {
    input: {
      background: inputBackground,
      border: inputBorder,
      foreground: inputForeground,
      placeholderForeground: blueGray[1]
    },
    inputOption: {
      activeBorder: deepPurple[3]
    },
    inputValidation: {
      errorBackground: red[9],
      errorBorder: red[7],
      errorForeground: red[0],
      infoBackground: blue[9],
      infoBorder: blue[7],
      infoForeground: blue[0],
      warningBackground: yellow[9],
      warningBorder: yellow[7],
      warningForeground: yellow[0]
    }
  };
};

export default inputColors;
