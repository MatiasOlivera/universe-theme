import { EditorColors } from '../../types/colors-types';
import { violet_3, violet_9 } from '../palette/violet.colors';

const editorGroupColors: EditorColors = {
  editorGroup: {
    border: '#151f2b',
    dropBackground: violet_9,
    emptyBackground: '#1c2938',
    focusedEmptyBorder: violet_3
  },
  editorGroupHeader: {
    noTabsBackground: '#1c2938',
    tabsBackground: '#151f2b',
    tabsBorder: '#1c2938'
  }
};

export default editorGroupColors;
