import { EditorColors } from '../../types/colors-types';
import { background_600 } from '../palette/background.colors';
import { purple_600, purple_700 } from '../palette/purple.colors';

const scrollbarColors: EditorColors = {
  scrollbar: {
    shadow: background_600
  },
  scrollbarSlider: {
    activeBackground: purple_600,
    background: purple_700,
    hoverBackground: purple_600
  }
};

export default scrollbarColors;
