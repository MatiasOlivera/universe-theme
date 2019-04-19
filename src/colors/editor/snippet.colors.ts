import { UIColors } from '../../types/colors-types';

const snippetColors: UIColors = (palette) => {
  const { deepPurple } = palette;

  return {
    editor: {
      snippetFinalTabstopHighlightBackground: deepPurple[6],
      snippetFinalTabstopHighlightBorder: deepPurple[5],
      snippetTabstopHighlightBackground: deepPurple[6],
      snippetTabstopHighlightBorder: deepPurple[5]
    }
  };
};

export default snippetColors;
