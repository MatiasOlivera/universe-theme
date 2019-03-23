import { EditorColors } from '../../types/colors-types';
import { background_7, background_8 } from '../palette/background.colors';
import { purple_100, purple_700, purple_900 } from '../palette/purple.colors';
import { slate_6 } from '../palette/slate.colors';
import { yellow_400 } from '../palette/yellow.colors';

const activityBarColors: EditorColors = {
  activityBar: {
    background: background_7,
    dropBackground: purple_900,
    foreground: yellow_400,
    inactiveForeground: slate_6,
    border: background_8
  },
  activityBarBadge: {
    background: purple_700,
    foreground: purple_100
  }
};

export default activityBarColors;
