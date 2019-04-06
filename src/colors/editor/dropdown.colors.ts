import { UIColors } from '../../types/colors-types';
import { inputTokens } from './input.colors';

const dropdownColors: UIColors = (palette) => {
  const { gray } = palette;
  const { inputBackground, inputBorder } = inputTokens(palette);

  return {
    dropdown: {
      background: inputBackground,
      border: inputBorder,
      foreground: gray[0],
      listBackground: inputBackground
    }
  };
};

export default dropdownColors;
