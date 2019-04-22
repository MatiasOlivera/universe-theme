import { UIColors } from '../../types/colors-types';

const snippetColors: UIColors = (palette) => {
  const { deepPurple } = palette;

  return {
    editor: {
      // Highlight background color of the final tabstop of a snippet.
      snippetFinalTabstopHighlightBackground: deepPurple[6],

      // Highlight border color of the final tabstop of a snippet.
      snippetFinalTabstopHighlightBorder: deepPurple[5],

      // Highlight background color of a snippet tabstop.
      snippetTabstopHighlightBackground: deepPurple[6],

      // Highlight border color of a snippet tabstop.
      snippetTabstopHighlightBorder: deepPurple[5]
    }
  };
};

export default snippetColors;
