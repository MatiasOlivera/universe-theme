import { EditorColors } from '../../types/colors-types';
import { background_700, background_800 } from '../palette/background.colors';
import { gray_100, gray_400 } from '../palette/gray.colors';
import { purple_900 } from '../palette/purple.colors';
import { yellow_400 } from '../palette/yellow.colors';

const panelColors: EditorColors = {
  panel: {
    background: background_700,
    border: background_800,
    dropBackground: purple_900
  },
  panelTitle: {
    activeBorder: yellow_400,
    activeForeground: gray_100,
    inactiveForeground: gray_400
  }
};

export default panelColors;
