import { EditorColors } from '../../types/colors-types';
import { red_0, red_8, red_9 } from '../palette/red.colors';
import { yellow_0 } from '../palette/yellow.colors';

const inputColors: EditorColors = {
  input: {
    background: '#233345',
    border: '#293c52',
    foreground: '#f6f8fa',
    placeholderForeground: '#96a2af'
  },
  inputOption: {
    activeBorder: '#ad82f2'
  },
  inputValidation: {
    errorBackground: red_9,
    errorBorder: red_8,
    errorForeground: red_0,
    infoBackground: '#213147',
    infoBorder: '#243953',
    infoForeground: '#dceff9',
    warningBackground: '#3d2e12',
    warningBorder: '#4c3912',
    warningForeground: yellow_0
  }
};

export default inputColors;
