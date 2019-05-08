import { UIColors } from '../../types/colors-types';

const quickPickerColors: UIColors = (palette) => {
  const { background, neutral } = palette;

  return {
    pickerGroup: {
      // Quick picker (Quick Open) color for grouping borders.
      border: background[4],

      // Quick picker (Quick Open) color for grouping labels.
      foreground: neutral[6]
    }
  };
};

export default quickPickerColors;
