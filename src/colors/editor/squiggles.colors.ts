import { EditorColors } from '../../types/colors-types';
import { blue_300 } from '../palette/blue.colors';
import { red_300 } from '../palette/red.colors';
import { violet_2 } from '../palette/violet.colors';
import { yellow_300 } from '../palette/yellow.colors';

const squigglesColors: EditorColors = {
  editorError: {
    foreground: red_300
  },
  editorHint: {
    foreground: violet_2
  },
  editorInfo: {
    foreground: blue_300
  },
  editorWarning: {
    foreground: yellow_300
  }
};

export default squigglesColors;
