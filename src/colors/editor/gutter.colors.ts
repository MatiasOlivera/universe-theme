import { EditorColors } from '../../types/colors-types';
import { blue_1 } from '../palette/blue.colors';
import { green_1 } from '../palette/green.colors';
import { red_1 } from '../palette/red.colors';

const gutterColors: EditorColors = {
  editorGutter: {
    addedBackground: green_1,
    background: '#1C2938',
    commentRangeForeground: '#d4dae1',
    deletedBackground: red_1,
    modifiedBackground: blue_1
  }
};

export default gutterColors;
