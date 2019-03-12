import { EditorColors } from '../../types/colors-types';
import { background_5 } from '../palette/background.colors';
import { violet_3, violet_9 } from '../palette/violet.colors';

const editorGroupColors: EditorColors = {
  editorGroup: {
    border: '#151f2b',
    dropBackground: violet_9,
    emptyBackground: background_5,
    focusedEmptyBorder: violet_3
  },
  editorGroupHeader: {
    noTabsBackground: background_5,
    tabsBackground: '#151f2b',
    tabsBorder: background_5
  }
};

export default editorGroupColors;
