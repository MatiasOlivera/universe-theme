import { EditorColors } from '../../types/colors-types';
import { background_3, background_4 } from '../palette/background.colors';

const diffColors: EditorColors = {
  diffEditor: {
    insertedTextBackground: background_4,
    removedTextBackground: background_3,
    border: '#151f2b'
  }
};

export default diffColors;
