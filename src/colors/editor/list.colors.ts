import { EditorColors } from '../../types/colors-types';
import { red_1, red_5 } from '../palette/red.colors';
import { yellow_1 } from '../palette/yellow.colors';

const listColors: EditorColors = {
  list: {
    activeSelectionBackground: '#5237a4',
    activeSelectionForeground: '#f1e5ff',
    dropBackground: '#2e2354',
    focusBackground: '#5237a4',
    focusForeground: '#f1e5ff',
    highlightForeground: '#f1e5ff',
    hoverBackground: '#6941c8',
    hoverForeground: '#f1e5ff',
    inactiveSelectionBackground: '#6941c8',
    inactiveSelectionForeground: '#f1e5ff',
    inactiveFocusBackground: '#6941c8',
    invalidItemForeground: '#2e2354',
    errorForeground: red_1,
    warningForeground: yellow_1
  },
  listFilterWidget: {
    background: '#5237a4',
    outline: '#6941c8',
    noMatchesOutline: red_5
  }
};

export default listColors;
