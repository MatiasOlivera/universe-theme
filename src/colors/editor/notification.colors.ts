import { EditorColors } from '../../types/colors-types';
import { background_500, background_600, background_700 } from '../palette/background.colors';
import { purple_300 } from '../palette/purple.colors';
import { gray_100 } from '../palette/gray.colors';

const notificationColors: EditorColors = {
  notificationCenter: {
    border: background_600
  },
  notificationCenterHeader: {
    background: background_700,
    foreground: gray_100
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
    foreground: gray_100
  }
};

export default notificationColors;
