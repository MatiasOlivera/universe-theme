import { EditorColors } from '../../types/colors-types';
import { slate_0 } from '../palette/slate.colors';
import { violet_2 } from '../palette/violet.colors';

const notificationColors: EditorColors = {
  notificationCenter: {
    border: '#1c2938'
  },
  notificationCenterHeader: {
    background: '#151f2b',
    foreground: slate_0
  },
  notificationLink: {
    foreground: violet_2
  },
  notificationToast: {
    border: '#1c2938'
  },
  notifications: {
    background: '#233345',
    border: '#151f2b',
    foreground: slate_0
  }
};

export default notificationColors;
