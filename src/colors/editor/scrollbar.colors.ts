import { EditorColors } from '../../types/colors-types';
import { background_700 } from '../palette/background.colors';
import { opacity_40, opacity_50, opacity_60 } from '../palette/opacity';
import { purple_600, purple_700 } from '../palette/purple.colors';

const scrollbarColors: EditorColors = {
  scrollbar: {
    shadow: background_700
  },
  scrollbarSlider: {
    activeBackground: `${purple_600}${opacity_60}`,
    background: `${purple_700}${opacity_50}`,
    hoverBackground: `${purple_600}${opacity_40}`
  }
};

export default scrollbarColors;
