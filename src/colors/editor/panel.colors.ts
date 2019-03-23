import { EditorColors } from '../../types/colors-types';
import { background_700, background_800 } from '../palette/background.colors';
import { purple_900 } from '../palette/purple.colors';
import { slate_0, slate_3 } from '../palette/slate.colors';
import { yellow_400 } from '../palette/yellow.colors';

const panelColors: EditorColors = {
  panel: {
    background: background_700,
    border: background_800,
    dropBackground: purple_900
  },
  panelTitle: {
    activeBorder: yellow_400,
    activeForeground: slate_0,
    inactiveForeground: slate_3
  }
};

export default panelColors;
