import { UIColors } from '../../types/colors-types';

const squigglesColors: UIColors = (palette) => {
  const { red, purple, blue, yellow } = palette;

  return {
    editorError: {
      foreground: red[2]
    },
    editorHint: {
      foreground: purple[2]
    },
    editorInfo: {
      foreground: blue[2]
    },
    editorWarning: {
      foreground: yellow[2]
    }
  };
};

export default squigglesColors;
