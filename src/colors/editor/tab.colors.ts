import { EditorColors } from '../../types/colors-types';
import { background_5, background_7 } from '../palette/background.colors';
import { slate_0, slate_1 } from '../palette/slate.colors';

const tabColors: EditorColors = {
  editorPane: {
    background: background_5
  },
  tab: {
    activeBackground: background_5,
    activeBorderTop: '#f4da55',
    activeForeground: slate_0,
    border: background_7,
    inactiveBackground: '#151f2b',
    inactiveForeground: slate_1,
    unfocusedActiveBorderTop: '#ebc83c',
    unfocusedActiveForeground: slate_1,
    unfocusedInactiveForeground: slate_1
  }
};

export default tabColors;
