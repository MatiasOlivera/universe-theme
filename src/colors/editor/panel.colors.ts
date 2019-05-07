import { UIColors } from '../../types/colors-types';
import { opacity_70 } from '../opacity';

// Panels are shown below the editor area and contain views like Output and
// Integrated Terminal.
const panelColors: UIColors = (palette) => {
  const { secondary, background, neutral } = palette;

  return {
    panel: {
      // Panel background color.
      background: background[6],

      // Panel border color to separate the panel from the editor.
      border: background[7],

      // Drag and drop feedback color for the panel title items. The color
      // should have transparency so that the panel entries can still shine through.
      dropBackground: `${background[7]}${opacity_70}`
    },

    panelTitle: {
      // Border color for the active panel title.
      activeBorder: secondary[3],

      // Title color for the active panel.
      activeForeground: neutral[1],

      // Title color for the inactive panel.
      inactiveForeground: neutral[3]
    }
  };
};

export default panelColors;
