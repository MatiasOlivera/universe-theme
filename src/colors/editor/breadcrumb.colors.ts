import { EditorColors } from '../../types/colors-types';
import { background_500, background_600 } from '../palette/background.colors';
import { slate_0, slate_1 } from '../palette/slate.colors';

const breadcrumbColors: EditorColors = {
  breadcrumb: {
    activeSelectionForeground: slate_0,
    background: background_600,
    focusForeground: slate_0,
    foreground: slate_1
  },
  breadcrumbPicker: {
    background: background_500
  }
};

export default breadcrumbColors;
