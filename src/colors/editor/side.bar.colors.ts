import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

const sideBarColors: UIColors = (palette) => {
  const { background, purple, blueGray } = palette;

  return {
    sideBar: {
      background: background[6],
      border: background[7],
      dropBackground: `${purple[8]}${opacity_50}`,
      foreground: blueGray[1]
    },
    sideBarSectionHeader: {
      background: background[6],
      border: background[7],
      foreground: blueGray[2]
    },
    sideBarTitle: {
      foreground: blueGray[2]
    }
  };
};

export default sideBarColors;
