import { UIColors } from '../../types/colors-types';
import { dialogTokens } from './dialog.colors';

// Notification toasts slide up from the bottom-right of the workbench.
// Once opened in the Notification Center, they are displayed in a list with a
// header.
const notificationColors: UIColors = (palette) => {
  const { background, blueGray, deepPurple } = palette;
  const { dialogBackground, dialogBorder } = dialogTokens(palette);

  return {
    // Notification center

    notificationCenter: {
      // Notification Center border color.
      border: dialogBorder
    },

    notificationCenterHeader: {
      // Notification Center header background color.
      background: background[2],

      // Notification Center header foreground color.
      foreground: blueGray[0]
    },

    notificationLink: {
      // Notification links foreground color.
      foreground: deepPurple[2]
    },

    notifications: {
      // Notification background color.
      background: dialogBackground,

      // Notification border color separating from other notifications in the Notification Center.
      border: dialogBorder,

      // Notification foreground color.
      foreground: blueGray[1]
    },

    // A notification
    notificationToast: {
      // Notification toast border color.
      border: dialogBorder
    }
  };
};

export default notificationColors;
