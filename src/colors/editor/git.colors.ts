import { EditorColors } from '../../types/colors-types';
import { blue_200 } from '../palette/blue.colors';
import { green_200 } from '../palette/green.colors';
import { red_200 } from '../palette/red.colors';
import { slate_0, slate_1 } from '../palette/slate.colors';
import { violet_1 } from '../palette/violet.colors';
import { yellow_200 } from '../palette/yellow.colors';

const gitColors: EditorColors = {
  gitDecoration: {
    addedResourceForeground: green_200,
    conflictingResourceForeground: yellow_200,
    deletedResourceForeground: red_200,
    ignoredResourceForeground: slate_1,
    modifiedResourceForeground: blue_200,
    submoduleResourceForeground: slate_0,
    untrackedResourceForeground: violet_1
  }
};

export default gitColors;
