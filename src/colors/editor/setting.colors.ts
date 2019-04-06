import { UIColors } from '../../types/colors-types';
import { inputTokens } from './input.colors';

const settingColors: UIColors = (palette) => {
  const { background, gray, yellow } = palette;
  const { inputBackground, inputBorder, inputForeground } = inputTokens(
    palette
  );

  return {
    settings: {
      checkboxBackground: inputBackground,
      checkboxBorder: inputBorder,
      checkboxForeground: inputForeground,
      dropdownBackground: inputBackground,
      dropdownBorder: inputBorder,
      dropdownForeground: inputForeground,
      dropdownListBorder: background[5],
      headerForeground: gray[0],
      modifiedItemIndicator: yellow[3],
      numberInputBackground: inputBackground,
      numberInputBorder: inputBorder,
      numberInputForeground: inputForeground,
      textInputBackground: inputBackground,
      textInputBorder: inputBorder,
      textInputForeground: inputForeground
    }
  };
};

export default settingColors;
