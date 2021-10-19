import { UIColors } from '../../types/colors-types';
import { selectionTokens } from './editor.colors';

const snippetColors: UIColors = (palette) => {
  const { highlightBackground } = selectionTokens(palette);

  return {
    editor: {
      // Highlight background color of the final tabstop of a snippet.
      snippetFinalTabstopHighlightBackground: highlightBackground,

      // Highlight border color of the final tabstop of a snippet.
      snippetFinalTabstopHighlightBorder: highlightBackground,

      // Highlight background color of a snippet tabstop.
      snippetTabstopHighlightBackground: highlightBackground,

      // Highlight border color of a snippet tabstop.
      snippetTabstopHighlightBorder: highlightBackground
    }
  };
};

export default snippetColors;
