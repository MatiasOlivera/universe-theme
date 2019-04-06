import { UIColors } from '../../types/colors-types';

const extensionButtonColors: UIColors = (palette) => {
  const { yellow } = palette;

  return {
    extensionButton: {
      prominentForeground: yellow[8],
      prominentBackground: yellow[3],
      prominentHoverBackground: yellow[2]
    }
  };
};

export default extensionButtonColors;
