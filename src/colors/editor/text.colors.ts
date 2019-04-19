import { UIColors } from '../../types/colors-types';

const textColors: UIColors = (palette) => {
  const { background, deepPurple, pink, gray } = palette;

  return {
    textBlockQuote: {
      background: background[3],
      border: deepPurple[9]
    },
    textCodeBlock: {
      background: background[3]
    },
    textLink: {
      activeForeground: deepPurple[2],
      foreground: deepPurple[3]
    },
    textPreformat: {
      foreground: pink[1]
    },
    textSeparator: {
      foreground: gray[3]
    }
  };
};

export default textColors;
