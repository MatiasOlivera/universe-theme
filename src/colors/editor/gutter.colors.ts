import { UIColors } from '../../types/colors-types';

const gutterColors: UIColors = (palette) => {
  const { green, background, gray, red, blue } = palette;

  return {
    editorGutter: {
      addedBackground: green[1],
      background: background[5],
      commentRangeForeground: gray[1],
      deletedBackground: red[1],
      modifiedBackground: blue[1]
    }
  };
};

export default gutterColors;
