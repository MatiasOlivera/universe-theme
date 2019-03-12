import { EditorColors } from '../../types/colors-types';
import { background_6 } from '../palette/background.colors';
import { blue_8, blue_9 } from '../palette/blue.colors';
import { cyan_8, cyan_9 } from '../palette/cyan.colors';
import { green_1 } from '../palette/green.colors';
import { slate_1, slate_8, slate_9 } from '../palette/slate.colors';
import { violet_1 } from '../palette/violet.colors';

const mergeConflictColors: EditorColors = {
  editorOverviewRuler: {
    commonContentForeground: slate_1,
    currentContentForeground: green_1,
    incomingContentForeground: violet_1
  },
  merge: {
    border: background_6,
    commonContentBackground: slate_9,
    commonHeaderBackground: slate_8,
    currentContentBackground: cyan_8,
    currentHeaderBackground: cyan_9,
    incomingContentBackground: blue_8,
    incomingHeaderBackground: blue_9
  }
};

export default mergeConflictColors;
