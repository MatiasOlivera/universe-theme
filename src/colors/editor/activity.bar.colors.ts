import { EditorColors } from '../../types/colors-types';
import { background_7, background_8 } from '../palette/background.colors';
import { slate_6 } from '../palette/slate.colors';
import { violet_0, violet_7, violet_9 } from '../palette/violet.colors';
import { yellow_3 } from '../palette/yellow.colors';

const activityBarColors: EditorColors = {
  activityBar: {
    background: background_7,
    dropBackground: violet_9,
    foreground: yellow_3,
    inactiveForeground: slate_6,
    border: background_8
  },
  activityBarBadge: {
    background: violet_7,
    foreground: violet_0
  }
};

export default activityBarColors;
