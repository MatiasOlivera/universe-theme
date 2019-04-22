import { UIColors } from '../../types/colors-types';
import { inputTokens } from './input.colors';

// A set of colors for all Dropdown widgets such as in the Integrated Terminal
// or the Output panel.
const dropdownColors: UIColors = (palette) => {
  const { blueGray } = palette;
  const { inputBackground, inputBorder } = inputTokens(palette);

  return {
    dropdown: {
      // Dropdown background.
      background: inputBackground,

      // Dropdown border.
      border: inputBorder,

      // Dropdown foreground.
      foreground: blueGray[1],

      // Dropdown list background.
      listBackground: inputBackground
    }
  };
};

export default dropdownColors;
