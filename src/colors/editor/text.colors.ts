import { EditorColors } from '../../types/colors-types';
import { background_400 } from '../palette/background.colors';
import { gray_400 } from '../palette/gray.colors';
import { pink_300 } from '../palette/pink.colors';
import { purple_300, purple_400, purple_900 } from '../palette/purple.colors';

const textColors: EditorColors = {
  textBlockQuote: {
    background: background_400,
    border: purple_900
  },
  textCodeBlock: {
    background: background_400
  },
  textLink: {
    activeForeground: purple_300,
    foreground: purple_400
  },
  textPreformat: {
    foreground: pink_300
  },
  textSeparator: {
    foreground: gray_400
  }
};

export default textColors;
