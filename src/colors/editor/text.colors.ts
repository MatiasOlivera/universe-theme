import { EditorColors } from '../../types/colors-types';
import { pink_2 } from '../palette/pink.colors';
import { slate_3 } from '../palette/slate.colors';
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
    foreground: pink_2
  },
  textSeparator: {
    foreground: slate_3
  }
};

export default textColors;
