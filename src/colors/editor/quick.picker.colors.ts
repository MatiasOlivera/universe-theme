import { EditorColors } from '../../types/colors-types';
import { gray_100 } from '../palette/gray.colors';
import { dialogBorder } from './dialog.colors';

const quickPickerColors: EditorColors = {
  pickerGroup: {
    border: dialogBorder,
    foreground: gray_100
  }
};

export default quickPickerColors;
