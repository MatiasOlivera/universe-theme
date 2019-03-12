import { EditorColors } from '../../types/colors-types';
import { background_3, background_4, background_6 } from '../palette/background.colors';

const diffColors: EditorColors = {
  diffEditor: {
    insertedTextBackground: background_4,
    removedTextBackground: background_3,
    border: background_6
  }
};

export default diffColors;
