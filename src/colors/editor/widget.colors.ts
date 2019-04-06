import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const widgetColors: UIColors = (palette) => {
  const { red, blue, yellow, gray, purple, background } = palette;
  const { dialogBackground, dialogBorder } = dialogTokens(palette);

  return {
    debugExceptionWidget: {
      background: dialogBackground,
      border: dialogBackground
    },
    editorHoverWidget: {
      background: dialogBackground,
      border: dialogBorder
    },
    editorMarkerNavigation: {
      background: dialogBackground
    },
    editorMarkerNavigationError: {
      background: red[2]
    },
    editorMarkerNavigationInfo: {
      background: blue[2]
    },
    editorMarkerNavigationWarning: {
      background: yellow[2]
    },
    editorSuggestWidget: {
      background: dialogBackground,
      border: dialogBorder,
      foreground: gray[0],
      highlightForeground: yellow[3],
      selectedBackground: purple[6]
    },
    editorWidget: {
      background: dialogBackground,
      border: dialogBorder,
      resizeBorder: purple[3]
    },
    widget: {
      shadow: background[6]
    }
  };
};

export default widgetColors;
