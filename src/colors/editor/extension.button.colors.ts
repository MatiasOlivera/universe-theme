import { UIColors } from '../../types/colors-types';

const extensionButtonColors: UIColors = (palette) => {
  const { primary } = palette;

  return {
    extensionButton: {
      // Extension view button foreground color (for example Install button).
      prominentForeground: primary[9],

      // Extension view button background color.
      prominentBackground: primary[4],

      // Extension view button background hover color.
      prominentHoverBackground: primary[3]
    }
  };
};

export default extensionButtonColors;
