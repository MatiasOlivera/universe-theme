import { UIColors } from '../../types/colors-types';
import { inputTokens } from './input.colors';

// These colors are for the GUI settings editor which can be opened with the
// Preferences: Open Settings (UI) command.
const settingColors: UIColors = (palette) => {
  const { neutral, background } = palette;
  const { inputBackground, inputBorder, inputForeground } = inputTokens(
    palette
  );

  return {
    settings: {
      // The foreground color for a section header or active title.
      headerForeground: neutral[1],

      // The line that indicates a modified setting.
      modifiedItemIndicator: background[0],

      // Checkbox background.
      checkboxBackground: inputBackground,

      // Checkbox border.
      checkboxBorder: inputBorder,

      // Checkbox foreground.
      checkboxForeground: inputForeground,

      // Dropdown background.
      dropdownBackground: inputBackground,

      // Dropdown border.
      dropdownBorder: inputBorder,

      // Dropdown foreground.
      dropdownForeground: inputForeground,

      // Dropdown list border.
      dropdownListBorder: inputBorder,

      // Number input box background.
      numberInputBackground: inputBackground,

      // Number input box border.
      numberInputBorder: inputBorder,

      // Number input box foreground.
      numberInputForeground: inputForeground,

      // Text input box background.
      textInputBackground: inputBackground,

      // Text input box border.
      textInputBorder: inputBorder,

      // Text input box foreground.
      textInputForeground: inputForeground
    }
  };
};

export default settingColors;
