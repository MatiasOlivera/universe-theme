import { EditorColors } from '../../types/colors-types';
import { slate_0, slate_3 } from '../palette/slate.colors';
import { violet_9 } from '../palette/violet.colors';

const panelColors: EditorColors = {
  panel: {
    background: '#151f2b',
    border: '#0f161e',
    dropBackground: violet_9
  },
  panelTitle: {
    activeBorder: '#f4da55',
    activeForeground: slate_0,
    inactiveForeground: slate_3
  }
};

export default panelColors;
