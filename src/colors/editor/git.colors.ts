import { EditorColors } from '../../types/colors-types';
import { red_1 } from '../palette/red.colors';
import { yellow_1 } from '../palette/yellow.colors';

const gitColors: EditorColors = {
  gitDecoration: {
    addedResourceForeground: '#a8f1c5',
    conflictingResourceForeground: yellow_1,
    deletedResourceForeground: red_1,
    ignoredResourceForeground: '#d4dae1',
    modifiedResourceForeground: '#a9d9f6',
    submoduleResourceForeground: '#f6f8fa',
    untrackedResourceForeground: '#ddc3fc'
  }
};

export default gitColors;
