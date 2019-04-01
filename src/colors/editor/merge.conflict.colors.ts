import { EditorColors } from '../../types/colors-types';
import { background_700 } from '../palette/background.colors';
import { blue_800, blue_900 } from '../palette/blue.colors';
import { gray_200, gray_800, gray_900 } from '../palette/gray.colors';
import { green_200 } from '../palette/green.colors';
import { opacity_50 } from '../palette/opacity';
import { purple_200 } from '../palette/purple.colors';
import { teal_800, teal_900 } from '../palette/teal.colors';

const headerOpacity: string = opacity_50;
const contentOpacity: string = opacity_50;

const mergeConflictColors: EditorColors = {
  editorOverviewRuler: {
    commonContentForeground: gray_200,
    currentContentForeground: green_200,
    incomingContentForeground: purple_200
  },
  merge: {
    border: background_700,
    commonContentBackground: `${gray_900}${contentOpacity}`,
    commonHeaderBackground: `${gray_800}${headerOpacity}`,
    currentContentBackground: `${teal_800}${contentOpacity}`,
    currentHeaderBackground: `${teal_900}${headerOpacity}`,
    incomingContentBackground: `${blue_800}${contentOpacity}`,
    incomingHeaderBackground: `${blue_900}${headerOpacity}`
  }
};

export default mergeConflictColors;
