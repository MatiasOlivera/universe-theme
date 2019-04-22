import { UIColors } from '../../types/colors-types';

const welcomePageColors: UIColors = (palette) => {
  const { background } = palette;

  return {
    welcomePage: {
      // Background color for the Welcome page.
      background: background[5],

      // Background color for the buttons on the Welcome page.
      buttonBackground: background[4],

      // Hover background color for the buttons on the Welcome page.
      buttonHoverBackground: background[3]
    }
  };
};

export default welcomePageColors;
