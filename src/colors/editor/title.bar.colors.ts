import { EditorColors } from '../../types/colors-types';
import { background_800, background_900 } from '../palette/background.colors';
import { gray_200, gray_400 } from '../palette/gray.colors';

const titleBarColors: EditorColors = {
  titleBar: {
    activeBackground: background_800,
    activeForeground: gray_200,
    border: background_900,
    inactiveBackground: background_800,
    inactiveForeground: gray_400
  }
};

export default titleBarColors;
