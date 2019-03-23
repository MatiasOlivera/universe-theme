import { EditorColors } from '../../types/colors-types';
import { background_600 } from '../palette/background.colors';
import { blue_200 } from '../palette/blue.colors';
import { green_200 } from '../palette/green.colors';
import { red_200 } from '../palette/red.colors';
import { slate_1 } from '../palette/slate.colors';

const gutterColors: EditorColors = {
  editorGutter: {
    addedBackground: green_200,
    background: background_600,
    commentRangeForeground: slate_1,
    deletedBackground: red_200,
    modifiedBackground: blue_200
  }
};

export default gutterColors;
