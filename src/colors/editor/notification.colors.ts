import { EditorColors } from '../../types/colors-types';
import { gray_100, gray_200 } from '../palette/gray.colors';
import { purple_300 } from '../palette/purple.colors';
import { modalBackground, modalBorder } from './modal.colors';

const notificationColors: EditorColors = {
  // Notification center
  notificationCenter: {
    border: modalBorder
  },
  notificationCenterHeader: {
    background: modalBackground,
    foreground: gray_200
  },
  notificationLink: {
    foreground: purple_300
  },
  notifications: {
    background: modalBackground,
    border: modalBorder,
    foreground: gray_100
  },

  // A notification
  notificationToast: {
    border: modalBorder
  }
};

export default notificationColors;
