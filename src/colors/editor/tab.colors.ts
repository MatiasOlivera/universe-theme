import { EditorColors } from '../../types/colors-types';
import { background_600, background_700, background_800 } from '../palette/background.colors';
import { gray_100, gray_200 } from '../palette/gray.colors';
import { yellow_400, yellow_500 } from '../palette/yellow.colors';

const tabColors: EditorColors = {
  editorPane: {
    background: background_600
  },
  tab: {
    activeBackground: background_600,
    activeBorderTop: yellow_400,
    activeForeground: gray_100,
    border: background_800,
    inactiveBackground: background_700,
    inactiveForeground: gray_200,
    unfocusedActiveBorderTop: yellow_500,
    unfocusedActiveForeground: gray_200,
    unfocusedInactiveForeground: gray_200
  }
};

export default tabColors;
