import { EditorColors } from '../../types/colors-types';
import { background_6 } from '../palette/background.colors';
import { red_1 } from '../palette/red.colors';
import { slate_1 } from '../palette/slate.colors';
import { violet_5 } from '../palette/violet.colors';
import { yellow_3 } from '../palette/yellow.colors';

const baseColors: EditorColors = {
  descriptionForeground: slate_1,
  errorForeground: red_1,
  focusBorder: yellow_3,
  foreground: slate_1,
  selection: {
    background: violet_5
  },
  widget: {
    shadow: background_6
  }
};

export default baseColors;
