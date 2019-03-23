import { EditorColors } from '../../types/colors-types';
import { blue_200 } from '../palette/blue.colors';
import { gray_100, gray_200 } from '../palette/gray.colors';
import { green_200 } from '../palette/green.colors';
import { purple_200 } from '../palette/purple.colors';
import { red_200 } from '../palette/red.colors';
import { yellow_200 } from '../palette/yellow.colors';

const gitColors: EditorColors = {
  gitDecoration: {
    addedResourceForeground: green_200,
    conflictingResourceForeground: yellow_200,
    deletedResourceForeground: red_200,
    ignoredResourceForeground: gray_200,
    modifiedResourceForeground: blue_200,
    submoduleResourceForeground: gray_100,
    untrackedResourceForeground: purple_200
  }
};

export default gitColors;
