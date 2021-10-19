import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

// Colors inside a text document, such as the welcome page.
const textColors: UIColors = (palette) => {
  const { primary, secondary, background } = palette;

  return {
    walkThrough: {
      // Background color for the embedded editors on the Interactive Playground.
      embeddedEditorBackground: background[6]
    },

    textBlockQuote: {
      // Background color for block quotes in text.
      background: background[4],

      //  Border color for block quotes in text.
      border: `${primary[4]}${opacity_50}`
    },

    textCodeBlock: {
      // Background color for code blocks in text.
      background: background[3]
    },

    textLink: {
      // Foreground color for links in text when clicked on and on mouse hover.
      activeForeground: secondary[3],

      // Foreground color for links in text.
      foreground: secondary[4]
    },

    textPreformat: {
      // Foreground color for preformatted text segments.
      foreground: primary[4]
    },

    textSeparator: {
      // Color for text separators.
      foreground: background[0]
    }
  };
};

export default textColors;
