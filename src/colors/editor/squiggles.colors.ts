import { EditorColors } from '../../types/colors-types';
import { blue_2 } from '../palette/blue.colors';
import { red_2 } from '../palette/red.colors';
import { violet_2 } from '../palette/violet.colors';
import { yellow_2 } from '../palette/yellow.colors';

const squigglesColors: EditorColors = {
  editorError: {
    foreground: red_2
  },
  editorHint: {
    foreground: violet_2
  },
  editorInfo: {
    foreground: blue_2
  },
  editorWarning: {
    foreground: yellow_2
  }
};

export default squigglesColors;
