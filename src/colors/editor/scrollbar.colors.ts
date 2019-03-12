import { EditorColors } from '../../types/colors-types';
import { background_5 } from '../palette/background.colors';
import { violet_6, violet_7 } from '../palette/violet.colors';

const scrollbarColors: EditorColors = {
  scrollbar: {
    shadow: background_5
  },
  scrollbarSlider: {
    activeBackground: violet_6,
    background: violet_7,
    hoverBackground: violet_6
  }
};

export default scrollbarColors;
