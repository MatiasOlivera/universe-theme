import { EditorColors } from '../../types/colors-types';
import { background_4, background_5 } from '../palette/background.colors';
import { slate_0, slate_1 } from '../palette/slate.colors';

const breadcrumbColors: EditorColors = {
  breadcrumb: {
    activeSelectionForeground: slate_0,
    background: background_5,
    focusForeground: slate_0,
    foreground: slate_1
  },
  breadcrumbPicker: {
    background: background_4
  }
};

export default breadcrumbColors;
