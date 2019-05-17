import { UIColors } from '../../types/colors-types';
import { selectionTokens } from './editor.colors';

const baseColors: UIColors = (palette) => {
  const { neutral, red, background } = palette;
  const { selectionBackground } = selectionTokens(palette);

  return {
    // Overall foreground color.
    foreground: neutral[2],

    // Foreground color for description text providing additional information,
    // for example for a label.
    descriptionForeground: neutral[5],

    // Overall foreground color for error messages
    errorForeground: red[4],

    // Overall border color for focused elements. This color is only used if
    // not overridden by a component.
    focusBorder: background[0],

    selection: {
      // Background color of text selections in the workbench (for input fields
      // or text areas, does not apply to selections within the editor and
      // the terminal).
      background: selectionBackground
    }
  };
};

export default baseColors;
