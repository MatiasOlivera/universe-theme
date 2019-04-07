import { UIColors } from '../../types/colors-types';

const extensionButtonColors: UIColors = (palette) => {
  const { yellow, black } = palette;

  return {
    extensionButton: {
      prominentForeground: black,
      prominentBackground: yellow[3],
      prominentHoverBackground: yellow[2]
    }
  };
};

export default extensionButtonColors;
