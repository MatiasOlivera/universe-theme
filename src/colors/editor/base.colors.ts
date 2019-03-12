import { EditorColors } from '../../types/colors-types';
import { red_1 } from '../palette/red.colors';
import { violet_5 } from '../palette/violet.colors';

const baseColors: EditorColors = {
  descriptionForeground: '#d4dae1',
  errorForeground: red_1,
  focusBorder: '#f4da55',
  foreground: '#d4dae1',
  selection: {
    background: violet_5
  },
  widget: {
    shadow: '#151f2b'
  }
};

export default baseColors;
