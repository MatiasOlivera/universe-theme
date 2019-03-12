import { EditorColors } from '../../types/colors-types';
import { blue_1 } from '../palette/blue.colors';
import { green_1 } from '../palette/green.colors';
import { red_1 } from '../palette/red.colors';
import { yellow_1 } from '../palette/yellow.colors';

const overviewRulerColors: EditorColors = {
  editorOverviewRuler: {
    addedForeground: green_1,
    border: '#151f2b',
    bracketMatchForeground: '#ddc3fc',
    deletedForeground: red_1,
    errorForeground: red_1,
    findMatchForeground: '#ddc3fc',
    infoForeground: blue_1,
    modifiedForeground: blue_1,
    rangeHighlightForeground: '#ddc3fc',
    selectionHighlightForeground: '#ddc3fc',
    warningForeground: yellow_1,
    wordHighlightForeground: '#ddc3fc',
    wordHighlightStrongForeground: '#ddc3fc'
  }
};

export default overviewRulerColors;
