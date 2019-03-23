import { EditorColors } from '../../types/colors-types';
import { background_600 } from '../palette/background.colors';
import { blue_200 } from '../palette/blue.colors';
import { gray_200 } from '../palette/gray.colors';
import { green_200 } from '../palette/green.colors';
import { red_200 } from '../palette/red.colors';

const gutterColors: EditorColors = {
  editorGutter: {
    addedBackground: green_200,
    background: background_600,
    commentRangeForeground: gray_200,
    deletedBackground: red_200,
    modifiedBackground: blue_200
  }
};

export default gutterColors;
