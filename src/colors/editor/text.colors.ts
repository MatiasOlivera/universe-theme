import { EditorColors } from '../../types/colors-types';
import { violet_1, violet_2, violet_8, violet_9 } from '../palette/violet.colors';

const textColors: EditorColors = {
  textBlockQuote: {
    background: violet_9,
    border: violet_8
  },
  textCodeBlock: {
    background: violet_9
  },
  textLink: {
    activeForeground: violet_1,
    foreground: violet_2
  },
  textPreformat: {
    foreground: '#f5a2b6'
  },
  textSeparator: {
    foreground: '#96a2af'
  }
};

export default textColors;
