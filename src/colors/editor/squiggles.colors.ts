import { EditorColors } from '../../types/colors-types';
import { blue_2 } from '../palette/blue.colors';
import { red_2 } from '../palette/red.colors';

const squigglesColors: EditorColors = {
  editorError: {
    foreground: red_2
  },
  editorHint: {
    foreground: '#c6a2f8'
  },
  editorInfo: {
    foreground: blue_2
  },
  editorWarning: {
    foreground: '#f7e87a'
  }
};

export default squigglesColors;
