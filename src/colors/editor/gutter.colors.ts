import { UIColors } from '../../types/colors-types';

// The gutter contains the glyph margins and the line numbers
const gutterColors: UIColors = (palette) => {
  const { green, background, blueGray, red, blue } = palette;

  return {
    editorGutter: {
      // Background color of the editor gutter.
      background: background[5],

      // Editor gutter background color for lines that are added.
      addedBackground: green[1],

      // Editor gutter background color for lines that are modified.
      modifiedBackground: blue[1],

      // Editor gutter background color for lines that are deleted.
      deletedBackground: red[1],

      commentRangeForeground: blueGray[1]
    }
  };
};

export default gutterColors;
