import { EditorColors } from '../../types/colors-types';
import { background_6 } from '../palette/background.colors';
import { purple_600 } from '../palette/purple.colors';
import { red_200 } from '../palette/red.colors';
import { slate_1 } from '../palette/slate.colors';
import { yellow_400 } from '../palette/yellow.colors';

const baseColors: EditorColors = {
  descriptionForeground: slate_1,
  errorForeground: red_200,
  focusBorder: yellow_400,
  foreground: slate_1,
  selection: {
    background: purple_600
  },
  widget: {
    shadow: background_6
  }
};

export default baseColors;
