import { UIColors } from '../../types/colors-types';

const gutterColors: UIColors = (palette) => {
  const { green, background, blueGray, red, blue } = palette;

  return {
    editorGutter: {
      addedBackground: green[1],
      background: background[5],
      commentRangeForeground: blueGray[1],
      deletedBackground: red[1],
      modifiedBackground: blue[1]
    }
  };
};

export default gutterColors;
