import { UIColors } from '../../types/colors-types';

const welcomePageColors: UIColors = (palette) => {
  const { background, deepPurple } = palette;

  return {
    walkThrough: {
      embeddedEditorBackground: background[5]
    },
    welcomePage: {
      background: background[5],
      buttonBackground: background[6],
      buttonHoverBackground: deepPurple[7]
    }
  };
};

export default welcomePageColors;
