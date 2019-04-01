import { EditorColors } from '../../types/colors-types';
import { background_700 } from '../palette/background.colors';
import { blue_300 } from '../palette/blue.colors';
import { gray_100 } from '../palette/gray.colors';
import { purple_400, purple_700 } from '../palette/purple.colors';
import { red_300 } from '../palette/red.colors';
import { yellow_300, yellow_400 } from '../palette/yellow.colors';
import { modalBackground, modalBorder } from './modal.colors';

const widgetColors: EditorColors = {
  debugExceptionWidget: {
    background: modalBackground,
    border: modalBackground
  },
  editorHoverWidget: {
    background: modalBackground,
    border: modalBorder
  },
  editorMarkerNavigation: {
    background: modalBackground
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
    background: modalBackground,
    border: modalBorder,
    foreground: gray_100,
    highlightForeground: yellow_400,
    selectedBackground: purple_700
  },
  editorWidget: {
    background: modalBackground,
    border: modalBorder,
    resizeBorder: purple_400
  },
  widget: {
    shadow: background_700
  }
};

export default widgetColors;
