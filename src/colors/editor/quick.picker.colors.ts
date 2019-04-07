import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const quickPickerColors: UIColors = (palette) => {
  const { blueGray } = palette;
  const { dialogBorder } = dialogTokens(palette);

  return {
    pickerGroup: {
      border: dialogBorder,
      foreground: blueGray[0]
    }
  };
};

export default quickPickerColors;
