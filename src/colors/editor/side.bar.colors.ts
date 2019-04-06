import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

const sideBarColors: UIColors = (palette) => {
  const { background, purple, gray } = palette;

  return {
    sideBar: {
      background: background[6],
      border: background[7],
      dropBackground: `${purple[8]}${opacity_50}`,
      foreground: gray[0]
    },
    sideBarSectionHeader: {
      background: background[6],
      border: background[7],
      foreground: gray[0]
    },
    sideBarTitle: {
      foreground: gray[0]
    }
  };
};

export default sideBarColors;
