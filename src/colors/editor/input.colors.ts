import { UIColors, ColorPalettes } from '../../types/colors-types';

interface InputTokens {
  inputBackground: string;
  inputBorder: string;
  inputForeground: string;
}

export const inputTokens = (palette: ColorPalettes): InputTokens => {
  const { background, gray } = palette;

  return {
    inputBackground: background[4],
    inputBorder: background[3],
    inputForeground: gray[0]
  };
};

const inputColors: UIColors = (palette) => {
  const { gray, purple, red, blue, yellow } = palette;
  const { inputBackground, inputBorder, inputForeground } = inputTokens(
    palette
  );

  return {
    input: {
      background: inputBackground,
      border: inputBorder,
      foreground: inputForeground,
      placeholderForeground: gray[3]
    },
    inputOption: {
      activeBorder: purple[3]
    },
    inputValidation: {
      errorBackground: red[8],
      errorBorder: red[7],
      errorForeground: red[0],
      infoBackground: blue[8],
      infoBorder: blue[7],
      infoForeground: blue[0],
      warningBackground: yellow[8],
      warningBorder: yellow[7],
      warningForeground: yellow[0]
    }
  };
};

export default inputColors;
