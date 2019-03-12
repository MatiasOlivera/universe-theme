import { EditorColors } from '../../types/colors-types';
import { background_4 } from '../palette/background.colors';
import { blue_2 } from '../palette/blue.colors';
import { red_2 } from '../palette/red.colors';
import { slate_0 } from '../palette/slate.colors';
import { violet_3, violet_7 } from '../palette/violet.colors';

const widgetColors: EditorColors = {
  debugExceptionWidget: {
    background: background_4,
    border: '#151f2b'
  },
  editorHoverWidget: {
    background: background_4,
    border: '#151f2b'
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
    background: '#f7e87a'
  },
  editorSuggestWidget: {
    background: background_4,
    border: '#151f2b',
    foreground: slate_0,
    highlightForeground: '#f4da55',
    selectedBackground: violet_7
  },
  editorWidget: {
    background: background_4,
    border: '#151f2b',
    resizeBorder: violet_3
  }
};

export default widgetColors;
