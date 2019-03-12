import { EditorColors } from '../../types/colors-types';
import { blue_1 } from '../palette/blue.colors';
import { green_1 } from '../palette/green.colors';
import { red_1 } from '../palette/red.colors';
import { slate_1 } from '../palette/slate.colors';

const gutterColors: EditorColors = {
  editorGutter: {
    addedBackground: green_1,
    background: '#1C2938',
    commentRangeForeground: slate_1,
    deletedBackground: red_1,
    modifiedBackground: blue_1
  }
};

export default gutterColors;
