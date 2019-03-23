import { EditorColors } from '../../types/colors-types';
import { pink_300 } from '../palette/pink.colors';
import { purple_200, purple_300, purple_800, purple_900 } from '../palette/purple.colors';
import { slate_3 } from '../palette/slate.colors';

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
    foreground: slate_3
  }
};

export default textColors;
