import { EditorColors } from '../../types/colors-types';
import { blue_1 } from '../palette/blue.colors';
import { green_1 } from '../palette/green.colors';
import { red_1 } from '../palette/red.colors';
import { yellow_1 } from '../palette/yellow.colors';

const gitColors: EditorColors = {
  gitDecoration: {
    addedResourceForeground: green_1,
    conflictingResourceForeground: yellow_1,
    deletedResourceForeground: red_1,
    ignoredResourceForeground: '#d4dae1',
    modifiedResourceForeground: blue_1,
    submoduleResourceForeground: '#f6f8fa',
    untrackedResourceForeground: '#ddc3fc'
  }
};

export default gitColors;
