import { EditorColors } from '../../types/colors-types';
import { background_6 } from '../palette/background.colors';
import { blue_8, blue_9 } from '../palette/blue.colors';
import { green_200 } from '../palette/green.colors';
import { slate_1, slate_8, slate_9 } from '../palette/slate.colors';
import { teal_800, teal_900 } from '../palette/teal.colors';
import { violet_1 } from '../palette/violet.colors';

const mergeConflictColors: EditorColors = {
  editorOverviewRuler: {
    commonContentForeground: slate_1,
    currentContentForeground: green_200,
    incomingContentForeground: violet_1
  },
  merge: {
    border: background_6,
    commonContentBackground: slate_9,
    commonHeaderBackground: slate_8,
    currentContentBackground: teal_800,
    currentHeaderBackground: teal_900,
    incomingContentBackground: blue_8,
    incomingHeaderBackground: blue_9
  }
};

export default mergeConflictColors;
