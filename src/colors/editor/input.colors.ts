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

// Colors for input controls such as in the Search view or the Find/Replace
// dialog.
const inputColors: UIColors = (palette) => {
  const { blueGray, deepPurple, red, blue, yellow } = palette;
  const { inputBackground, inputBorder, inputForeground } = inputTokens(
    palette
  );

  return {
    input: {
      // Input box background.
      background: inputBackground,

      // Input box border.
      border: inputBorder,

      // Input box foreground.
      foreground: inputForeground,

      // Input box foreground color for placeholder text.
      placeholderForeground: blueGray[1]
    },

    inputOption: {
      // Border color of activated options in input fields.
      activeBorder: deepPurple[3]
    },

    inputValidation: {
      // Input validation background color for error severity.
      errorBackground: red[9],

      // Input validation border color for error severity.
      errorBorder: red[7],

      // Input validation foreground color for error severity.
      errorForeground: red[0],

      // Input validation background color for information severity.
      infoBackground: blue[9],

      // Input validation border color for information severity.
      infoBorder: blue[7],

      //  Input validation foreground color for information severity.
      infoForeground: blue[0],

      // Input validation background color for information warning.
      warningBackground: yellow[9],

      // Input validation border color for warning severity.
      warningBorder: yellow[7],

      // Input validation foreground color for warning severity.
      warningForeground: yellow[0]
    }
  };
};

export default inputColors;
