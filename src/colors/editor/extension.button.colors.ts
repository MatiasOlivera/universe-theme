import { UIColors } from '../../types/colors-types';

const extensionButtonColors: UIColors = (palette) => {
  const { yellow, gray } = palette;

  return {
    extensionButton: {
      prominentForeground: gray[9],
      prominentBackground: yellow[3],
      prominentHoverBackground: yellow[2]
    }
  };
};

export default extensionButtonColors;
