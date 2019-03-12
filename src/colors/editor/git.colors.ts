import { EditorColors } from '../../types/colors-types';
import { green_1 } from '../palette/green.colors';
import { red_1 } from '../palette/red.colors';
import { yellow_1 } from '../palette/yellow.colors';

const gitColors: EditorColors = {
  gitDecoration: {
    addedResourceForeground: green_1,
    conflictingResourceForeground: yellow_1,
    deletedResourceForeground: red_1,
    ignoredResourceForeground: '#d4dae1',
    modifiedResourceForeground: '#a9d9f6',
    submoduleResourceForeground: '#f6f8fa',
    untrackedResourceForeground: '#ddc3fc'
  }
};

export default gitColors;
