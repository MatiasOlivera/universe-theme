import { EditorColors } from '../../types/colors-types';
import { blue_2 } from '../palette/blue.colors';
import { red_2 } from '../palette/red.colors';

const widgetColors: EditorColors = {
  debugExceptionWidget: {
    background: '#233345',
    border: '#151f2b'
  },
  editorHoverWidget: {
    background: '#233345',
    border: '#151f2b'
  },
  editorMarkerNavigation: {
    background: '#233345'
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
    background: '#233345',
    border: '#151f2b',
    foreground: '#f6f8fa',
    highlightForeground: '#f4da55',
    selectedBackground: '#5237a4'
  },
  editorWidget: {
    background: '#233345',
    border: '#151f2b',
    resizeBorder: '#ad82f2'
  }
};

export default widgetColors;
