import { UIColors } from '../../types/colors-types';

const peekViewColors: UIColors = (palette) => {
  const { purple, background, blueGray } = palette;

  return {
    peekView: {
      border: purple[4]
    },
    peekViewEditor: {
      background: background[5],
      matchHighlightBackground: purple[6],
      matchHighlightBorder: purple[5]
    },
    peekViewEditorGutter: {
      background: background[5]
    },
    peekViewResult: {
      background: background[6],
      fileForeground: blueGray[0],
      lineForeground: blueGray[1],
      matchHighlightBackground: purple[7],
      selectionBackground: purple[6],
      selectionForeground: purple[0]
    },
    peekViewTitle: {
      background: background[6]
    },
    peekViewTitleDescription: {
      foreground: blueGray[4]
    },
    peekViewTitleLabel: {
      foreground: blueGray[1]
    }
  };
};

export default peekViewColors;
