import { EditorColors } from '../../types/colors-types';
import { background_700, background_800 } from '../palette/background.colors';
import { purple_900 } from '../palette/purple.colors';
import { gray_100 } from '../palette/gray.colors';

const sideBarColors: EditorColors = {
  sideBar: {
    background: background_700,
    border: background_800,
    dropBackground: purple_900,
    foreground: gray_100
  },
  sideBarSectionHeader: {
    background: background_700,
    border: background_800,
    foreground: gray_100
  },
  sideBarTitle: {
    foreground: gray_100
  }
};

export default sideBarColors;
