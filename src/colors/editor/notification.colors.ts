import { EditorColors } from '../../types/colors-types';
import { background_4, background_5, background_6 } from '../palette/background.colors';
import { slate_0 } from '../palette/slate.colors';
import { violet_2 } from '../palette/violet.colors';

const notificationColors: EditorColors = {
  notificationCenter: {
    border: background_5
  },
  notificationCenterHeader: {
    background: background_6,
    foreground: slate_0
  },
  notificationLink: {
    foreground: violet_2
  },
  notificationToast: {
    border: background_5
  },
  notifications: {
    background: background_4,
    border: background_6,
    foreground: slate_0
  }
};

export default notificationColors;
