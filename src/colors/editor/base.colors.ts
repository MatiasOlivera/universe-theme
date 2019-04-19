import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

const baseColors: UIColors = (palette) => {
  const { primary, blueGray, red } = palette;

  return {
    // Overall foreground color.
    foreground: blueGray[0],

    // Foreground color for description text providing additional information,
    // for example for a label.
    descriptionForeground: blueGray[4],

    // Overall foreground color for error messages
    errorForeground: red[2],

    // Overall border color for focused elements. This color is only used if
    // not overridden by a component.
    focusBorder: primary[3],

    selection: {
      // Background color of text selections in the workbench (for input fields
      // or text areas, does not apply to selections within the editor and
      // the terminal).
      background: `${primary[3]}${opacity_50}`
    }
  };
};

export default baseColors;
