import { EditorColors } from '../../types/colors-types';
import { background_600, background_700 } from '../palette/background.colors';
import { purple_400, purple_900 } from '../palette/purple.colors';

const editorGroupColors: EditorColors = {
  editorGroup: {
    border: background_700,
    dropBackground: purple_900,
    emptyBackground: background_600,
    focusedEmptyBorder: purple_400
  },
  editorGroupHeader: {
    noTabsBackground: background_600,
    tabsBackground: background_700,
    tabsBorder: background_600
  }
};

export default editorGroupColors;
