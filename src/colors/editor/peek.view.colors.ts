import { UIColors } from '../../types/colors-types';

// Peek views are used to show references and declarations as a view inside the
// editor.
const peekViewColors: UIColors = (palette) => {
  const { deepPurple, background, blueGray } = palette;

  return {
    peekView: {
      // Color of the peek view borders and arrow.
      border: deepPurple[4]
    },

    peekViewEditor: {
      // Background color of the peek view editor.
      background: background[5],

      // Match highlight color in the peek view editor.
      matchHighlightBackground: deepPurple[6],

      // Match highlight border color in the peek view editor.
      matchHighlightBorder: deepPurple[5]
    },

    peekViewEditorGutter: {
      // Background color of the gutter in the peek view editor.
      background: background[5]
    },

    peekViewResult: {
      // Background color of the peek view result list.
      background: background[6],

      // Foreground color for file nodes in the peek view result list.
      fileForeground: blueGray[1],

      // Foreground color for line nodes in the peek view result list.
      lineForeground: blueGray[2],

      // Match highlight color in the peek view result list.
      matchHighlightBackground: deepPurple[7],

      // Background color of the selected entry in the peek view result list.
      selectionBackground: deepPurple[6],

      // Foreground color of the selected entry in the peek view result list.
      selectionForeground: deepPurple[0]
    },

    peekViewTitle: {
      // Background color of the peek view title area.
      background: background[6]
    },

    peekViewTitleDescription: {
      // Color of the peek view title info.
      foreground: blueGray[3]
    },

    peekViewTitleLabel: {
      // Color of the peek view title.
      foreground: blueGray[1]
    }
  };
};

export default peekViewColors;
