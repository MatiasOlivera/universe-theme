import { UIColors } from '../../types/colors-types';

const baseColors: UIColors = (palette) => {
  const { red, blueGray, yellow, deepPurple } = palette;

  return {
    // Overall foreground color.
    foreground: blueGray[1],

    // Foreground color for description text providing additional information,
    // for example for a label.
    descriptionForeground: blueGray[3],

    // Overall foreground color for error messages
    errorForeground: red[1],

    // Overall border color for focused elements. This color is only used if
    // not overridden by a component.
    focusBorder: yellow[3],

    selection: {
      // Background color of text selections in the workbench (for input fields
      // or text areas, does not apply to selections within the editor and
      // the terminal).
      background: deepPurple[5]
    }
  };
};

export default baseColors;
