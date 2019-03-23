import { EditorColors } from '../../types/colors-types';
import { background_400, background_500, background_700 } from '../palette/background.colors';

const diffColors: EditorColors = {
  diffEditor: {
    insertedTextBackground: background_500,
    removedTextBackground: background_400,
    border: background_700
  }
};

export default diffColors;
