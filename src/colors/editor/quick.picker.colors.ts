import { EditorColors } from '../../types/colors-types';
import { gray_100 } from '../palette/gray.colors';
import { modalBorder } from './modal.colors';

const quickPickerColors: EditorColors = {
  pickerGroup: {
    border: modalBorder,
    foreground: gray_100
  }
};

export default quickPickerColors;
