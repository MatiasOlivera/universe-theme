import { EditorColors } from '../../types/colors-types';
import { background_200, background_300 } from '../palette/background.colors';
import { blue_100, blue_800, blue_900 } from '../palette/blue.colors';
import { gray_100, gray_400 } from '../palette/gray.colors';
import { purple_400 } from '../palette/purple.colors';
import { red_100, red_800, red_900 } from '../palette/red.colors';
import { yellow_100, yellow_800, yellow_900 } from '../palette/yellow.colors';

export const inputBackground: string = background_300;
export const inputBorder: string = background_200;
export const inputForeground: string = gray_100;

const inputColors: EditorColors = {
  input: {
    background: inputBackground,
    border: inputBorder,
    foreground: inputForeground,
    placeholderForeground: gray_400
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
