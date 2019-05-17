import { UIColors } from '../../types/colors-types';

const squigglesColors: UIColors = (palette) => {
  const { red, deepPurple, cyan, yellow } = palette;

  return {
    editorError: {
      // Foreground color of error squiggles in the editor.
      foreground: red[4]
    },
    editorHint: {
      // Foreground color of hints in the editor.
      foreground: deepPurple[4]
    },
    editorInfo: {
      // Foreground color of info squiggles in the editor.
      foreground: cyan[4]
    },
    editorWarning: {
      // Foreground color of warning squiggles in the editor.
      foreground: yellow[4]
    }
  };
};

export default squigglesColors;
