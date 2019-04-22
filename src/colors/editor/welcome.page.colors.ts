import { UIColors } from '../../types/colors-types';

const welcomePageColors: UIColors = (palette) => {
  const { background, deepPurple } = palette;

  return {
    walkThrough: {
      // Background color for the embedded editors on the Interactive Playground.
      embeddedEditorBackground: background[5]
    },

    welcomePage: {
      // Background color for the Welcome page.
      background: background[5],

      // Background color for the buttons on the Welcome page.
      buttonBackground: background[6],

      // Hover background color for the buttons on the Welcome page.
      buttonHoverBackground: deepPurple[7]
    }
  };
};

export default welcomePageColors;
