import { EditorColors } from '../../types/colors-types';
import { background_4, background_6 } from '../palette/background.colors';
import { blue_300 } from '../palette/blue.colors';
import { purple_400, purple_700 } from '../palette/purple.colors';
import { red_300 } from '../palette/red.colors';
import { slate_0 } from '../palette/slate.colors';
import { yellow_300, yellow_400 } from '../palette/yellow.colors';

const widgetColors: EditorColors = {
  debugExceptionWidget: {
    background: background_4,
    border: background_6
  },
  editorHoverWidget: {
    background: background_4,
    border: background_6
  },
  editorMarkerNavigation: {
    background: background_4
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
    background: background_4,
    border: background_6,
    foreground: slate_0,
    highlightForeground: yellow_400,
    selectedBackground: purple_700
  },
  editorWidget: {
    background: background_4,
    border: background_6,
    resizeBorder: purple_400
  }
};

export default widgetColors;
