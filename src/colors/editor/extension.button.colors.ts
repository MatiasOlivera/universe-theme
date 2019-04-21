import { UIColors } from '../../types/colors-types';

const extensionButtonColors: UIColors = (palette) => {
  const { primary, gray } = palette;

  return {
    extensionButton: {
      // Extension view button foreground color (for example Install button).
      prominentForeground: gray[9],

      // Extension view button background color.
      prominentBackground: primary[3],

      // Extension view button background hover color.
      prominentHoverBackground: primary[2]
    }
  };
};

export default extensionButtonColors;
