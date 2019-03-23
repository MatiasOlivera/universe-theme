import { EditorColors } from '../../types/colors-types';
import { background_3, background_4 } from '../palette/background.colors';
import { blue_0, blue_8, blue_9 } from '../palette/blue.colors';
import { red_100, red_800, red_900 } from '../palette/red.colors';
import { slate_0, slate_3 } from '../palette/slate.colors';
import { violet_3 } from '../palette/violet.colors';
import { yellow_0, yellow_8, yellow_9 } from '../palette/yellow.colors';

const inputColors: EditorColors = {
  input: {
    background: background_4,
    border: background_3,
    foreground: slate_0,
    placeholderForeground: slate_3
  },
  inputOption: {
    activeBorder: violet_3
  },
  inputValidation: {
    errorBackground: red_900,
    errorBorder: red_800,
    errorForeground: red_100,
    infoBackground: blue_9,
    infoBorder: blue_8,
    infoForeground: blue_0,
    warningBackground: yellow_9,
    warningBorder: yellow_8,
    warningForeground: yellow_0
  }
};

export default inputColors;
