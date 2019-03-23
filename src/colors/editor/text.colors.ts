import { EditorColors } from '../../types/colors-types';
import { gray_400 } from '../palette/gray.colors';
import { pink_300 } from '../palette/pink.colors';
import { purple_200, purple_300, purple_800, purple_900 } from '../palette/purple.colors';

const textColors: EditorColors = {
  textBlockQuote: {
    background: purple_900,
    border: purple_800
  },
  textCodeBlock: {
    background: purple_900
  },
  textLink: {
    activeForeground: purple_200,
    foreground: purple_300
  },
  textPreformat: {
    foreground: pink_300
  },
  textSeparator: {
    foreground: gray_400
  }
};

export default textColors;
