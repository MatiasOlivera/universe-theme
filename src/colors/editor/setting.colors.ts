import { UIColors } from '../../types/colors-types';
import { inputTokens } from './input.colors';

const settingColors: UIColors = (palette) => {
  const { background, blueGray, yellow } = palette;
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
      headerForeground: blueGray[1],
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
