import { EditorColors } from '../../types/colors-types';
import { blue_8, blue_9 } from '../palette/blue.colors';
import { cyan_8, cyan_9 } from '../palette/cyan.colors';
import { green_1 } from '../palette/green.colors';

const mergeConflictColors: EditorColors = {
  editorOverviewRuler: {
    commonContentForeground: '#d4dae1',
    currentContentForeground: green_1,
    incomingContentForeground: '#ddc3fc'
  },
  merge: {
    border: '#151f2b',
    commonContentBackground: '#1c232a',
    commonHeaderBackground: '#29343d',
    currentContentBackground: cyan_8,
    currentHeaderBackground: cyan_9,
    incomingContentBackground: blue_8,
    incomingHeaderBackground: blue_9
  }
};

export default mergeConflictColors;
