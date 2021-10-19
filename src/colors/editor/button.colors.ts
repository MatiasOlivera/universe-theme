import { UIColors } from '../../types/colors-types';

// A set of colors for button widgets such as Open Folder button in the
// Explorer of a new window.
const buttonColors: UIColors = (palette) => {
  const { secondary } = palette;

  return {
    button: {
      // Button background color.
      background: secondary[4],

      // Button foreground color.
      foreground: secondary[9],

      // Button background color when hovering.
      hoverBackground: secondary[3]
    }
  };
};

export default buttonColors;
