import { UIColors } from '../../types/colors-types';

// Colors inside a text document, such as the welcome page.
const textColors: UIColors = (palette) => {
  const { background, deepPurple, pink, gray } = palette;

  return {
    textBlockQuote: {
      // Background color for block quotes in text.
      background: background[3],

      //  Border color for block quotes in text.
      border: deepPurple[9]
    },

    textCodeBlock: {
      // Background color for code blocks in text.
      background: background[3]
    },

    textLink: {
      // Foreground color for links in text when clicked on and on mouse hover.
      activeForeground: deepPurple[2],

      // Foreground color for links in text.
      foreground: deepPurple[3]
    },

    textPreformat: {
      // Foreground color for preformatted text segments.
      foreground: pink[1]
    },

    textSeparator: {
      // Color for text separators.
      foreground: gray[3]
    }
  };
};

export default textColors;
