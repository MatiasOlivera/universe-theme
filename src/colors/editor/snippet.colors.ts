import { UIColors } from '../../types/colors-types';

const snippetColors: UIColors = (palette) => {
  const { purple } = palette;

  return {
    editor: {
      snippetFinalTabstopHighlightBackground: purple[6],
      snippetFinalTabstopHighlightBorder: purple[5],
      snippetTabstopHighlightBackground: purple[6],
      snippetTabstopHighlightBorder: purple[5]
    }
  };
};

export default snippetColors;
