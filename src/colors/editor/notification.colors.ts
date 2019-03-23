import { EditorColors } from '../../types/colors-types';
import { background_500, background_600, background_700 } from '../palette/background.colors';
import { purple_300 } from '../palette/purple.colors';
import { slate_0 } from '../palette/slate.colors';

const notificationColors: EditorColors = {
  notificationCenter: {
    border: background_600
  },
  notificationCenterHeader: {
    background: background_700,
    foreground: slate_0
  },
  notificationLink: {
    foreground: purple_300
  },
  notificationToast: {
    border: background_600
  },
  notifications: {
    background: background_500,
    border: background_700,
    foreground: slate_0
  }
};

export default notificationColors;
