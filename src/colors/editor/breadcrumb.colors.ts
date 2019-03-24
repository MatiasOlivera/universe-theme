import { EditorColors } from '../../types/colors-types';
import { background_500, background_600 } from '../palette/background.colors';
import { gray_100, gray_200 } from '../palette/gray.colors';

const breadcrumbColors: EditorColors = {
  breadcrumb: {
    activeSelectionForeground: gray_100,
    background: background_600,
    focusForeground: gray_100,
    foreground: gray_200
  },
  breadcrumbPicker: {
    background: background_500
  }
};

export default breadcrumbColors;
