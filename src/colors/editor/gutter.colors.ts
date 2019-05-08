import { UIColors } from '../../types/colors-types';

// The gutter contains the glyph margins and the line numbers
const gutterColors: UIColors = (palette) => {
  const { green, background, neutral, orange, blue } = palette;

  return {
    editorGutter: {
      // Background color of the editor gutter.
      background: background[5],

      // Editor gutter background color for lines that are added.
      addedBackground: green[3],

      // Editor gutter background color for lines that are modified.
      modifiedBackground: blue[3],

      // Editor gutter background color for lines that are deleted.
      deletedBackground: orange[3],

      commentRangeForeground: neutral[3]
    }
  };
};

export default gutterColors;
