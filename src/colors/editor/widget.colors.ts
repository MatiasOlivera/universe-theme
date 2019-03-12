import { EditorColors } from '../../types/colors-types';
import { background_4, background_6 } from '../palette/background.colors';
import { blue_2 } from '../palette/blue.colors';
import { red_2 } from '../palette/red.colors';
import { slate_0 } from '../palette/slate.colors';
import { violet_3, violet_7 } from '../palette/violet.colors';
import { yellow_2, yellow_3 } from '../palette/yellow.colors';

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
    background: red_2
  },
  editorMarkerNavigationInfo: {
    background: blue_2
  },
  editorMarkerNavigationWarning: {
    background: yellow_2
  },
  editorSuggestWidget: {
    background: background_4,
    border: background_6,
    foreground: slate_0,
    highlightForeground: yellow_3,
    selectedBackground: violet_7
  },
  editorWidget: {
    background: background_4,
    border: background_6,
    resizeBorder: violet_3
  }
};

export default widgetColors;
