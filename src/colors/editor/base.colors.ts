import { EditorColors } from '../../types/colors-types';
import { background_700 } from '../palette/background.colors';
import { gray_200 } from '../palette/gray.colors';
import { purple_600 } from '../palette/purple.colors';
import { red_200 } from '../palette/red.colors';
import { yellow_400 } from '../palette/yellow.colors';

const baseColors: EditorColors = {
  descriptionForeground: gray_200,
  errorForeground: red_200,
  focusBorder: yellow_400,
  foreground: gray_200,
  selection: {
    background: purple_600
  },
  widget: {
    shadow: background_700
  }
};

export default baseColors;
