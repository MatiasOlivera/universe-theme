import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

// The Side Bar contains views like the Explorer and Search.
const sideBarColors: UIColors = (palette) => {
  const { background, deepPurple, blueGray } = palette;

  return {
    sideBar: {
      // Side Bar background color.
      background: background[6],

      // Side Bar border color on the side separating the editor.
      border: background[7],

      // Drag and drop feedback color for the side bar sections. The color
      // should have transparency so that the side bar sections can still
      // shine through.
      dropBackground: `${deepPurple[9]}${opacity_50}`,

      // Side Bar foreground color.
      foreground: blueGray[1]
    },

    sideBarSectionHeader: {
      // Side Bar section header background color.
      background: background[6],

      // Side bar section header border color.
      border: background[7],

      // Side Bar section header foreground color.
      foreground: blueGray[2]
    },

    sideBarTitle: {
      // Side Bar title foreground color.
      foreground: blueGray[2]
    }
  };
};

export default sideBarColors;
