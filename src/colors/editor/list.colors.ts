import { EditorColors } from '../../types/colors-types';
import { purple_100, purple_600, purple_700, purple_900 } from '../palette/purple.colors';
import { red_200, red_600 } from '../palette/red.colors';
import { yellow_200 } from '../palette/yellow.colors';

const listColors: EditorColors = {
  list: {
    activeSelectionBackground: purple_700,
    activeSelectionForeground: purple_100,
    dropBackground: purple_900,
    focusBackground: purple_700,
    focusForeground: purple_100,
    highlightForeground: purple_100,
    hoverBackground: purple_600,
    hoverForeground: purple_100,
    inactiveSelectionBackground: purple_600,
    inactiveSelectionForeground: purple_100,
    inactiveFocusBackground: purple_600,
    invalidItemForeground: purple_900,
    errorForeground: red_200,
    warningForeground: yellow_200
  },
  listFilterWidget: {
    background: purple_700,
    outline: purple_600,
    noMatchesOutline: red_600
  }
};

export default listColors;
