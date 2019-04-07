import { UIColors } from '../../types/colors-types';

const textColors: UIColors = (palette) => {
  const { background, purple, pink, blueGray } = palette;

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
      foreground: pink[2]
    },
    textSeparator: {
      foreground: blueGray[3]
    }
  };
};

export default textColors;
