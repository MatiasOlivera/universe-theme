import { EditorColors } from '../../types/colors-types';
import { red_1 } from '../palette/red.colors';
import { slate_1 } from '../palette/slate.colors';
import { violet_5 } from '../palette/violet.colors';

const baseColors: EditorColors = {
  descriptionForeground: slate_1,
  errorForeground: red_1,
  focusBorder: '#f4da55',
  foreground: slate_1,
  selection: {
    background: violet_5
  },
  widget: {
    shadow: '#151f2b'
  }
};

export default baseColors;
