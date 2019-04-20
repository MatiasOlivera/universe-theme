import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

// The Editor widget is shown in front of the editor content. Examples are the
// Find/Replace dialog, the suggestion widget, and the editor hover.
const widgetColors: UIColors = (palette) => {
  const { red, blue, yellow, blueGray, deepPurple, background } = palette;
  const { dialogBackground, dialogBorder } = dialogTokens(palette);

  return {
    editorWidget: {
      // Background color of editor widgets, such as Find/Replace.
      background: dialogBackground,

      // Border color of the editor widget unless the widget does not contain a
      // border or defines its own border color.
      border: dialogBorder,

      // Border color of the resize bar of editor widgets. The color is only
      // used if the widget chooses to have a resize border and if the color is
      // not overridden by a widget.
      resizeBorder: deepPurple[3]
    },

    editorSuggestWidget: {
      // Background color of the suggestion widget.
      background: dialogBackground,

      // Border color of the suggestion widget.
      border: dialogBorder,

      // Foreground color of the suggestion widget.
      foreground: blueGray[0],

      // Color of the match highlights in the suggestion widget.
      highlightForeground: yellow[3],

      // Background color of the selected entry in the suggestion widget.
      selectedBackground: deepPurple[6]
    },

    editorHoverWidget: {
      // Background color of the editor hover.
      background: dialogBackground,

      // Border color of the editor hover.
      border: dialogBorder
    },

    // The Debug Exception widget is a peek view that shows in the editor when
    // debug stops at an exception.
    debugExceptionWidget: {
      // Exception widget background color.
      background: dialogBackground,

      // Exception widget border color.
      border: dialogBackground
    },

    // The editor marker view shows when navigating to errors and warnings in
    // the editor (Go to Next Error or Warning command).

    editorMarkerNavigation: {
      // Editor marker navigation widget background.
      background: dialogBackground
    },

    editorMarkerNavigationError: {
      // Editor marker navigation widget error color.
      background: red[2]
    },

    editorMarkerNavigationInfo: {
      // Editor marker navigation widget info color.
      background: blue[2]
    },

    editorMarkerNavigationWarning: {
      // Editor marker navigation widget warning color.
      background: yellow[2]
    },

    widget: {
      // Shadow color of widgets such as Find/Replace inside the editor.
      shadow: background[6]
    }
  };
};

export default widgetColors;
