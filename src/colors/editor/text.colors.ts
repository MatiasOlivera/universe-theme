import { UIColors } from '../../types/colors-types';

const textColors: UIColors = (palette) => {
  const { background, purple, pink, gray } = palette;

  return {
    textBlockQuote: {
      background: background[3],
      border: purple[8]
    },
    textCodeBlock: {
      background: background[3]
    },
    textLink: {
      activeForeground: purple[2],
      foreground: purple[3]
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
