import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const quickPickerColors: UIColors = (palette) => {
  const { blueGray } = palette;
  const { dialogBorder } = dialogTokens(palette);

  return {
    pickerGroup: {
      // Quick picker (Quick Open) color for grouping borders.
      border: dialogBorder,

      // Quick picker (Quick Open) color for grouping labels.
      foreground: blueGray[0]
    }
  };
};

export default quickPickerColors;
