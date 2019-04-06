import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const quickPickerColors: UIColors = (palette) => {
  const { gray } = palette;
  const { dialogBorder } = dialogTokens(palette);

  return {
    pickerGroup: {
      border: dialogBorder,
      foreground: gray[0]
    }
  };
};

export default quickPickerColors;
