import { UIColors } from '../../types/colors-types';

const peekViewColors: UIColors = (palette) => {
  const { purple, background, gray } = palette;

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
      fileForeground: gray[0],
      lineForeground: gray[1],
      matchHighlightBackground: purple[7],
      selectionBackground: purple[6],
      selectionForeground: purple[0]
    },
    peekViewTitle: {
      background: background[6]
    },
    peekViewTitleDescription: {
      foreground: gray[4]
    },
    peekViewTitleLabel: {
      foreground: gray[1]
    }
  };
};

export default peekViewColors;
