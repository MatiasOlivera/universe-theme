import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

const notificationColors: UIColors = (palette) => {
  const { background, gray, purple } = palette;
  const { dialogBackground, dialogBorder } = dialogTokens(palette);

  return {
    // Notification center
    notificationCenter: {
      border: dialogBorder
    },
    notificationCenterHeader: {
      background: background[2],
      foreground: gray[1]
    },
    notificationLink: {
      foreground: purple[2]
    },
    notifications: {
      background: dialogBackground,
      border: dialogBorder,
      foreground: gray[0]
    },

    // A notification
    notificationToast: {
      border: dialogBorder
    }
  };
};

export default notificationColors;
