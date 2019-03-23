import { EditorColors } from '../../types/colors-types';
import { background_800, background_900 } from '../palette/background.colors';
import { slate_1, slate_3 } from '../palette/slate.colors';

const titleBarColors: EditorColors = {
  titleBar: {
    activeBackground: background_800,
    activeForeground: slate_1,
    border: background_900,
    inactiveBackground: background_800,
    inactiveForeground: slate_3
  }
};

export default titleBarColors;
