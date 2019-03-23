import { EditorColors } from '../../types/colors-types';
import { background_3, background_4 } from '../palette/background.colors';
import { blue_100, blue_800, blue_900 } from '../palette/blue.colors';
import { purple_400 } from '../palette/purple.colors';
import { red_100, red_800, red_900 } from '../palette/red.colors';
import { slate_0, slate_3 } from '../palette/slate.colors';
import { yellow_100, yellow_800, yellow_900 } from '../palette/yellow.colors';

const inputColors: EditorColors = {
  input: {
    background: background_4,
    border: background_3,
    foreground: slate_0,
    placeholderForeground: slate_3
  },
  inputOption: {
    activeBorder: purple_400
  },
  inputValidation: {
    errorBackground: red_900,
    errorBorder: red_800,
    errorForeground: red_100,
    infoBackground: blue_900,
    infoBorder: blue_800,
    infoForeground: blue_100,
    warningBackground: yellow_900,
    warningBorder: yellow_800,
    warningForeground: yellow_100
  }
};

export default inputColors;
