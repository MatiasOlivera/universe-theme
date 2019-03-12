import { EditorColors } from '../../types/colors-types';
import { background_6, background_7 } from '../palette/background.colors';
import { slate_0, slate_3 } from '../palette/slate.colors';
import { violet_9 } from '../palette/violet.colors';
import { yellow_3 } from '../palette/yellow.colors';

const panelColors: EditorColors = {
  panel: {
    background: background_6,
    border: background_7,
    dropBackground: violet_9
  },
  panelTitle: {
    activeBorder: yellow_3,
    activeForeground: slate_0,
    inactiveForeground: slate_3
  }
};

export default panelColors;
