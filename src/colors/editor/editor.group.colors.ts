import { EditorColors } from '../../types/colors-types';
import { background_5, background_6 } from '../palette/background.colors';
import { violet_3, violet_9 } from '../palette/violet.colors';

const editorGroupColors: EditorColors = {
  editorGroup: {
    border: background_6,
    dropBackground: violet_9,
    emptyBackground: background_5,
    focusedEmptyBorder: violet_3
  },
  editorGroupHeader: {
    noTabsBackground: background_5,
    tabsBackground: background_6,
    tabsBorder: background_5
  }
};

export default editorGroupColors;
