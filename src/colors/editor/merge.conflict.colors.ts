import { EditorColors } from '../../types/colors-types';

const mergeConflictColors: EditorColors = {
  editorOverviewRuler: {
    commonContentForeground: '#d4dae1',
    currentContentForeground: '#a8f1c5',
    incomingContentForeground: '#ddc3fc'
  },
  merge: {
    border: '#151f2b',
    commonContentBackground: '#1c232a',
    commonHeaderBackground: '#29343d',
    currentContentBackground: '#2e5758',
    currentHeaderBackground: '#223d3f',
    incomingContentBackground: '#353767',
    incomingHeaderBackground: '#29294d'
  }
};

export default mergeConflictColors;
