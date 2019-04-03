import { EditorColors } from '../../types/colors-types';
import { gray_100 } from '../palette/gray.colors';
import { inputBackground, inputBorder } from './input.colors';

const dropdownColors: EditorColors = {
  dropdown: {
    background: inputBackground,
    border: inputBorder,
    foreground: gray_100,
    listBackground: inputBackground
  }
};

export default dropdownColors;
