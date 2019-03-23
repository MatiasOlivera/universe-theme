import { EditorColors } from '../../types/colors-types';
import { background_5, background_6 } from '../palette/background.colors';
import { purple_400, purple_900 } from '../palette/purple.colors';

const editorGroupColors: EditorColors = {
  editorGroup: {
    border: background_6,
    dropBackground: purple_900,
    emptyBackground: background_5,
    focusedEmptyBorder: purple_400
  },
  editorGroupHeader: {
    noTabsBackground: background_5,
    tabsBackground: background_6,
    tabsBorder: background_5
  }
};

export default editorGroupColors;
