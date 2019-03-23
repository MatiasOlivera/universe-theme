import { EditorColors } from '../../types/colors-types';
import { red_200, red_600 } from '../palette/red.colors';
import { violet_0, violet_6, violet_7, violet_9 } from '../palette/violet.colors';
import { yellow_1 } from '../palette/yellow.colors';

const listColors: EditorColors = {
  list: {
    activeSelectionBackground: violet_7,
    activeSelectionForeground: violet_0,
    dropBackground: violet_9,
    focusBackground: violet_7,
    focusForeground: violet_0,
    highlightForeground: violet_0,
    hoverBackground: violet_6,
    hoverForeground: violet_0,
    inactiveSelectionBackground: violet_6,
    inactiveSelectionForeground: violet_0,
    inactiveFocusBackground: violet_6,
    invalidItemForeground: violet_9,
    errorForeground: red_200,
    warningForeground: yellow_1
  },
  listFilterWidget: {
    background: violet_7,
    outline: violet_6,
    noMatchesOutline: red_600
  }
};

export default listColors;
