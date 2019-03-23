import { EditorColors } from '../../types/colors-types';
import { background_700 } from '../palette/background.colors';
import { blue_200 } from '../palette/blue.colors';
import { green_200 } from '../palette/green.colors';
import { purple_200 } from '../palette/purple.colors';
import { red_200 } from '../palette/red.colors';
import { yellow_200 } from '../palette/yellow.colors';

const overviewRulerColors: EditorColors = {
  editorOverviewRuler: {
    addedForeground: green_200,
    border: background_700,
    bracketMatchForeground: purple_200,
    deletedForeground: red_200,
    errorForeground: red_200,
    findMatchForeground: purple_200,
    infoForeground: blue_200,
    modifiedForeground: blue_200,
    rangeHighlightForeground: purple_200,
    selectionHighlightForeground: purple_200,
    warningForeground: yellow_200,
    wordHighlightForeground: purple_200,
    wordHighlightStrongForeground: purple_200
  }
};

export default overviewRulerColors;
