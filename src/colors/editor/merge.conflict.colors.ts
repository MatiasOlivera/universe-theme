import { EditorColors } from '../../types/colors-types';
import { background_700 } from '../palette/background.colors';
import { blue_800, blue_900 } from '../palette/blue.colors';
import { gray_200, gray_800, gray_900 } from '../palette/gray.colors';
import { green_200 } from '../palette/green.colors';
import { purple_200 } from '../palette/purple.colors';
import { teal_800, teal_900 } from '../palette/teal.colors';

const mergeConflictColors: EditorColors = {
  editorOverviewRuler: {
    commonContentForeground: gray_200,
    currentContentForeground: green_200,
    incomingContentForeground: purple_200
  },
  merge: {
    border: background_700,
    commonContentBackground: gray_900,
    commonHeaderBackground: gray_800,
    currentContentBackground: teal_800,
    currentHeaderBackground: teal_900,
    incomingContentBackground: blue_800,
    incomingHeaderBackground: blue_900
  }
};

export default mergeConflictColors;
