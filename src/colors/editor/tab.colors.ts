import { EditorColors } from '../../types/colors-types';
import { background_5, background_6, background_7 } from '../palette/background.colors';
import { slate_0, slate_1 } from '../palette/slate.colors';
import { yellow_400, yellow_500 } from '../palette/yellow.colors';

const tabColors: EditorColors = {
  editorPane: {
    background: background_5
  },
  tab: {
    activeBackground: background_5,
    activeBorderTop: yellow_400,
    activeForeground: slate_0,
    border: background_7,
    inactiveBackground: background_6,
    inactiveForeground: slate_1,
    unfocusedActiveBorderTop: yellow_500,
    unfocusedActiveForeground: slate_1,
    unfocusedInactiveForeground: slate_1
  }
};

export default tabColors;
