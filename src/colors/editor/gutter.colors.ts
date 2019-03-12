import { EditorColors } from '../../types/colors-types';
import { red_1 } from '../palette/red.colors';

const gutterColors: EditorColors = {
  editorGutter: {
    addedBackground: '#a8f1c5',
    background: '#1C2938',
    commentRangeForeground: '#d4dae1',
    deletedBackground: red_1,
    modifiedBackground: '#a9d9f6'
  }
};

export default gutterColors;
