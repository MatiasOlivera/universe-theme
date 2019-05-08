import { UIColors } from '../../types/colors-types';

// The gutter contains the glyph margins and the line numbers
const gutterColors: UIColors = (palette) => {
  const { green, background, neutral, orange, blue } = palette;

  return {
    editorGutter: {
      // Background color of the editor gutter.
      background: background[5],

      // Editor gutter background color for lines that are added.
      addedBackground: green[4],

      // Editor gutter background color for lines that are modified.
      modifiedBackground: blue[4],

      // Editor gutter background color for lines that are deleted.
      deletedBackground: orange[4],

      commentRangeForeground: neutral[4]
    }
  };
};

export default gutterColors;
