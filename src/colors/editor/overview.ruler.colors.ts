import { EditorColors } from '../../types/colors-types';
import { red_1 } from '../palette/red.colors';

const overviewRulerColors: EditorColors = {
  editorOverviewRuler: {
    addedForeground: '#a8f1c5',
    border: '#151f2b',
    bracketMatchForeground: '#ddc3fc',
    deletedForeground: red_1,
    errorForeground: red_1,
    findMatchForeground: '#ddc3fc',
    infoForeground: '#a9d9f6',
    modifiedForeground: '#a9d9f6',
    rangeHighlightForeground: '#ddc3fc',
    selectionHighlightForeground: '#ddc3fc',
    warningForeground: '#f9f1a1',
    wordHighlightForeground: '#ddc3fc',
    wordHighlightStrongForeground: '#ddc3fc'
  }
};

export default overviewRulerColors;
