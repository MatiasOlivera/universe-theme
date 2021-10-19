import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';
import { selectionTokens } from './editor.colors';

// Peek views are used to show references and declarations as a view inside the
// editor.
const peekViewColors: UIColors = (palette) => {
  const { neutral } = palette;
  const { dialogBackground, dialogBorder } = dialogTokens(palette);
  const { selectionBackground, highlightBackground } = selectionTokens(palette);

  return {
    peekView: {
      // Color of the peek view borders and arrow.
      border: dialogBorder
    },

    peekViewEditor: {
      // Background color of the peek view editor.
      background: dialogBackground,

      // Match highlight color in the peek view editor.
      matchHighlightBackground: highlightBackground,

      // Match highlight border color in the peek view editor.
      matchHighlightBorder: highlightBackground
    },

    peekViewEditorGutter: {
      // Background color of the gutter in the peek view editor.
      background: dialogBackground
    },

    peekViewResult: {
      // Background color of the peek view result list.
      background: dialogBackground,

      // Foreground color for file nodes in the peek view result list.
      fileForeground: neutral[4],

      // Foreground color for line nodes in the peek view result list.
      lineForeground: neutral[4],

      // Match highlight color in the peek view result list.
      matchHighlightBackground: highlightBackground,

      // Background color of the selected entry in the peek view result list.
      selectionBackground: selectionBackground,

      // Foreground color of the selected entry in the peek view result list.
      selectionForeground: neutral[1]
    },

    peekViewTitle: {
      // Background color of the peek view title area.
      background: dialogBackground
    },

    peekViewTitleDescription: {
      // Color of the peek view title info.
      foreground: neutral[4]
    },

    peekViewTitleLabel: {
      // Color of the peek view title.
      foreground: neutral[2]
    }
  };
};

export default peekViewColors;
