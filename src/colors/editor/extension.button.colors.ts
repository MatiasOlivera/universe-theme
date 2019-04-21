import { UIColors } from '../../types/colors-types';

const extensionButtonColors: UIColors = (palette) => {
  const { yellow, gray } = palette;

  return {
    extensionButton: {
      // Extension view button foreground color (for example Install button).
      prominentForeground: gray[9],

      // Extension view button background color.
      prominentBackground: yellow[3],

      // Extension view button background hover color.
      prominentHoverBackground: yellow[2]
    }
  };
};

export default extensionButtonColors;
