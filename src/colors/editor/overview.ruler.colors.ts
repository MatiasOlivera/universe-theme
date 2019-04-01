import { EditorColors } from '../../types/colors-types';
import { background_700 } from '../palette/background.colors';
import { blue_200 } from '../palette/blue.colors';
import { green_200 } from '../palette/green.colors';
import { opacity_50 } from '../palette/opacity';
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
    findMatchForeground: `${purple_200}${opacity_50}`,
    infoForeground: blue_200,
    modifiedForeground: blue_200,
    rangeHighlightForeground: `${purple_200}${opacity_50}`,
    selectionHighlightForeground: `${purple_200}${opacity_50}`,
    warningForeground: yellow_200,
    wordHighlightForeground: `${purple_200}${opacity_50}`,
    wordHighlightStrongForeground: `${purple_200}${opacity_50}`
  }
};

export default overviewRulerColors;
