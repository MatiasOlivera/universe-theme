import { EditorColors } from '../../types/colors-types';
import { background_600, background_700, background_800 } from '../palette/background.colors';
import { slate_0, slate_1 } from '../palette/slate.colors';
import { yellow_400, yellow_500 } from '../palette/yellow.colors';

const tabColors: EditorColors = {
  editorPane: {
    background: background_600
  },
  tab: {
    activeBackground: background_600,
    activeBorderTop: yellow_400,
    activeForeground: slate_0,
    border: background_800,
    inactiveBackground: background_700,
    inactiveForeground: slate_1,
    unfocusedActiveBorderTop: yellow_500,
    unfocusedActiveForeground: slate_1,
    unfocusedInactiveForeground: slate_1
  }
};

export default tabColors;
