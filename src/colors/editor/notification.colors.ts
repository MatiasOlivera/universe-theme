import { EditorColors } from '../../types/colors-types';
import { background_300 } from '../palette/background.colors';
import { gray_100, gray_200 } from '../palette/gray.colors';
import { purple_300 } from '../palette/purple.colors';
import { dialogBackground, dialogBorder } from './dialog.colors';

const notificationColors: EditorColors = {
  // Notification center
  notificationCenter: {
    border: dialogBorder
  },
  notificationCenterHeader: {
    background: background_300,
    foreground: gray_200
  },
  notificationLink: {
    foreground: purple_300
  },
  notifications: {
    background: dialogBackground,
    border: dialogBorder,
    foreground: gray_100
  },

  // A notification
  notificationToast: {
    border: dialogBorder
  }
};

export default notificationColors;
