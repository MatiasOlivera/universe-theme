import { EditorColors } from '../../types/colors-types';
import { slate_0, slate_1 } from '../palette/slate.colors';

const tabColors: EditorColors = {
  editorPane: {
    background: '#1c2938'
  },
  tab: {
    activeBackground: '#1c2938',
    activeBorderTop: '#f4da55',
    activeForeground: slate_0,
    border: '#0f161e',
    inactiveBackground: '#151f2b',
    inactiveForeground: slate_1,
    unfocusedActiveBorderTop: '#ebc83c',
    unfocusedActiveForeground: slate_1,
    unfocusedInactiveForeground: slate_1
  }
};

export default tabColors;
