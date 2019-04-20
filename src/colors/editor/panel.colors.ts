import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

// Panels are shown below the editor area and contain views like Output and
// Integrated Terminal.
const panelColors: UIColors = (palette) => {
  const { background, deepPurple, yellow, blueGray } = palette;

  return {
    panel: {
      // Panel background color.
      background: background[6],

      // Panel border color to separate the panel from the editor.
      border: background[7],

      // Drag and drop feedback color for the panel title items. The color
      // should have transparency so that the panel entries can still shine through.
      dropBackground: `${deepPurple[9]}${opacity_50}`
    },
    panelTitle: {
      // Border color for the active panel title.
      activeBorder: yellow[3],

      // Title color for the active panel.
      activeForeground: blueGray[0],

      // Title color for the inactive panel.
      inactiveForeground: blueGray[2]
    }
  };
};

export default panelColors;
