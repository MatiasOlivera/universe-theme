import { EditorColors } from '../../types/colors-types';
import { background_6 } from '../palette/background.colors';
import { blue_1 } from '../palette/blue.colors';
import { green_200 } from '../palette/green.colors';
import { red_200 } from '../palette/red.colors';
import { violet_1 } from '../palette/violet.colors';
import { yellow_200 } from '../palette/yellow.colors';

const overviewRulerColors: EditorColors = {
  editorOverviewRuler: {
    addedForeground: green_200,
    border: background_6,
    bracketMatchForeground: violet_1,
    deletedForeground: red_200,
    errorForeground: red_200,
    findMatchForeground: violet_1,
    infoForeground: blue_1,
    modifiedForeground: blue_1,
    rangeHighlightForeground: violet_1,
    selectionHighlightForeground: violet_1,
    warningForeground: yellow_200,
    wordHighlightForeground: violet_1,
    wordHighlightStrongForeground: violet_1
  }
};

export default overviewRulerColors;
