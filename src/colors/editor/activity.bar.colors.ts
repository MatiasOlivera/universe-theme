import { EditorColors } from '../../types/colors-types';
import { background_800, background_900 } from '../palette/background.colors';
import { gray_700 } from '../palette/gray.colors';
import { purple_100, purple_700, purple_900 } from '../palette/purple.colors';
import { yellow_400 } from '../palette/yellow.colors';

const activityBarColors: EditorColors = {
  activityBar: {
    background: background_800,
    dropBackground: purple_900,
    foreground: yellow_400,
    inactiveForeground: gray_700,
    border: background_900
  },
  activityBarBadge: {
    background: purple_700,
    foreground: purple_100
  }
};

export default activityBarColors;
