import { UIColors } from '../../types/colors-types';

const peekViewColors: UIColors = (palette) => {
  const { deepPurple, background, blueGray } = palette;

  return {
    peekView: {
      border: deepPurple[4]
    },
    peekViewEditor: {
      background: background[5],
      matchHighlightBackground: deepPurple[6],
      matchHighlightBorder: deepPurple[5]
    },
    peekViewEditorGutter: {
      background: background[5]
    },
    peekViewResult: {
      background: background[6],
      fileForeground: blueGray[1],
      lineForeground: blueGray[2],
      matchHighlightBackground: deepPurple[7],
      selectionBackground: deepPurple[6],
      selectionForeground: deepPurple[0]
    },
    peekViewTitle: {
      background: background[6]
    },
    peekViewTitleDescription: {
      foreground: blueGray[3]
    },
    peekViewTitleLabel: {
      foreground: blueGray[1]
    }
  };
};

export default peekViewColors;
