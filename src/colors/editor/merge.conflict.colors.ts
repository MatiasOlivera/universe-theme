import { EditorColors } from '../../types/colors-types';
import { background_700 } from '../palette/background.colors';
import { blue_800, blue_900 } from '../palette/blue.colors';
import { green_200 } from '../palette/green.colors';
import { purple_200 } from '../palette/purple.colors';
import { slate_1, slate_8, slate_9 } from '../palette/slate.colors';
import { teal_800, teal_900 } from '../palette/teal.colors';

const mergeConflictColors: EditorColors = {
  editorOverviewRuler: {
    commonContentForeground: slate_1,
    currentContentForeground: green_200,
    incomingContentForeground: purple_200
  },
  merge: {
    border: background_700,
    commonContentBackground: slate_9,
    commonHeaderBackground: slate_8,
    currentContentBackground: teal_800,
    currentHeaderBackground: teal_900,
    incomingContentBackground: blue_800,
    incomingHeaderBackground: blue_900
  }
};

export default mergeConflictColors;
