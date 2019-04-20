import { UIColors } from '../../types/colors-types';

const squigglesColors: UIColors = (palette) => {
  const { red, deepPurple, blue, yellow } = palette;

  return {
    editorError: {
      // Foreground color of error squiggles in the editor.
      foreground: red[2]
    },
    editorHint: {
      // Foreground color of hints in the editor.
      foreground: deepPurple[2]
    },
    editorInfo: {
      // Foreground color of info squiggles in the editor.
      foreground: blue[2]
    },
    editorWarning: {
      // Foreground color of warning squiggles in the editor.
      foreground: yellow[2]
    }
  };
};

export default squigglesColors;
