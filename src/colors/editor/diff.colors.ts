import { EditorColors } from '../../types/colors-types';
import { background_700 } from '../palette/background.colors';
import { green_900 } from '../palette/green.colors';
import { red_900 } from '../palette/red.colors';

const diffColors: EditorColors = {
  diffEditor: {
    insertedTextBackground: `${green_900}40`, // 25% opacity
    removedTextBackground: `${red_900}40`, // 25% opacity
    border: background_700
  }
};

export default diffColors;
