import { UIColors } from '../../types/colors-types';

// A set of colors for button widgets such as Open Folder button in the
// Explorer of a new window.
const buttonColors: UIColors = (palette) => {
  const { yellow, gray } = palette;

  return {
    button: {
      // Button background color.
      background: yellow[3],

      // Button foreground color.
      foreground: gray[9],

      // Button background color when hovering.
      hoverBackground: yellow[2]
    }
  };
};

export default buttonColors;
