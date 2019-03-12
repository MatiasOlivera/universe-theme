import { EditorColors } from '../../types/colors-types';
import { background_7 } from '../palette/background.colors';
import { slate_0 } from '../palette/slate.colors';
import { violet_9 } from '../palette/violet.colors';

const sideBarColors: EditorColors = {
  sideBar: {
    background: '#151f2b',
    border: background_7,
    dropBackground: violet_9,
    foreground: slate_0
  },
  sideBarSectionHeader: {
    background: '#151f2b',
    border: background_7,
    foreground: slate_0
  },
  sideBarTitle: {
    foreground: slate_0
  }
};

export default sideBarColors;
