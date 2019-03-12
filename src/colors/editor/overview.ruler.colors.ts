import { EditorColors } from '../../types/colors-types';
import { blue_1 } from '../palette/blue.colors';
import { green_1 } from '../palette/green.colors';
import { red_1 } from '../palette/red.colors';
import { violet_1 } from '../palette/violet.colors';
import { yellow_1 } from '../palette/yellow.colors';

const overviewRulerColors: EditorColors = {
  editorOverviewRuler: {
    addedForeground: green_1,
    border: '#151f2b',
    bracketMatchForeground: violet_1,
    deletedForeground: red_1,
    errorForeground: red_1,
    findMatchForeground: violet_1,
    infoForeground: blue_1,
    modifiedForeground: blue_1,
    rangeHighlightForeground: violet_1,
    selectionHighlightForeground: violet_1,
    warningForeground: yellow_1,
    wordHighlightForeground: violet_1,
    wordHighlightStrongForeground: violet_1
  }
};

export default overviewRulerColors;
