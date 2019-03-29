import { EditorColors } from '../../types/colors-types';
import { background_500, background_700 } from '../palette/background.colors';
import { blue_300 } from '../palette/blue.colors';
import { gray_100 } from '../palette/gray.colors';
import { purple_400, purple_700 } from '../palette/purple.colors';
import { red_300 } from '../palette/red.colors';
import { yellow_300, yellow_400 } from '../palette/yellow.colors';

const widgetColors: EditorColors = {
  debugExceptionWidget: {
    background: background_500,
    border: background_700
  },
  editorHoverWidget: {
    background: background_500,
    border: background_700
  },
  editorMarkerNavigation: {
    background: background_500
  },
  editorMarkerNavigationError: {
    background: red_300
  },
  editorMarkerNavigationInfo: {
    background: blue_300
  },
  editorMarkerNavigationWarning: {
    background: yellow_300
  },
  editorSuggestWidget: {
    background: background_500,
    border: background_700,
    foreground: gray_100,
    highlightForeground: yellow_400,
    selectedBackground: purple_700
  },
  editorWidget: {
    background: background_500,
    border: background_700,
    resizeBorder: purple_400
  },
  widget: {
    shadow: background_700
  }
};

export default widgetColors;
