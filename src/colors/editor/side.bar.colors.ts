import { EditorColors } from '../../types/colors-types';
import { background_6, background_7 } from '../palette/background.colors';
import { purple_900 } from '../palette/purple.colors';
import { slate_0 } from '../palette/slate.colors';

const sideBarColors: EditorColors = {
  sideBar: {
    background: background_6,
    border: background_7,
    dropBackground: purple_900,
    foreground: slate_0
  },
  sideBarSectionHeader: {
    background: background_6,
    border: background_7,
    foreground: slate_0
  },
  sideBarTitle: {
    foreground: slate_0
  }
};

export default sideBarColors;
