import { EditorColors } from '../../types/colors-types';
import { background_700 } from '../palette/background.colors';
import { green_900 } from '../palette/green.colors';
import { opacity_30 } from '../palette/opacity';
import { red_900 } from '../palette/red.colors';

const diffColors: EditorColors = {
  diffEditor: {
    insertedTextBackground: `${green_900}${opacity_30}`,
    removedTextBackground: `${red_900}${opacity_30}`,
    border: background_700
  }
};

export default diffColors;
