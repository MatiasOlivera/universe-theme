import { UIColors } from '../../types/colors-types';
import { inputTokens } from './input.colors';

const dropdownColors: UIColors = (palette) => {
  const { blueGray } = palette;
  const { inputBackground, inputBorder } = inputTokens(palette);

  return {
    dropdown: {
      background: inputBackground,
      border: inputBorder,
      foreground: blueGray[0],
      listBackground: inputBackground
    }
  };
};

export default dropdownColors;
