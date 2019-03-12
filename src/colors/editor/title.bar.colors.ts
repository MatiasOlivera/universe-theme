import { EditorColors } from '../../types/colors-types';
import { background_7, background_8 } from '../palette/background.colors';
import { slate_3 } from '../palette/slate.colors';

const titleBarColors: EditorColors = {
  titleBar: {
    activeBackground: background_7,
    activeForeground: '#d4dae1',
    border: background_8,
    inactiveBackground: background_7,
    inactiveForeground: slate_3
  }
};

export default titleBarColors;
