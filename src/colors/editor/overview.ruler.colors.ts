import { EditorColors } from '../../types/colors-types';
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
    infoForeground: '#a9d9f6',
    modifiedForeground: '#a9d9f6',
    rangeHighlightForeground: '#ddc3fc',
    selectionHighlightForeground: '#ddc3fc',
    warningForeground: yellow_1,
    wordHighlightForeground: '#ddc3fc',
    wordHighlightStrongForeground: '#ddc3fc'
  }
};

export default overviewRulerColors;
