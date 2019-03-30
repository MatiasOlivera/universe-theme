import { EditorColors } from '../../types/colors-types';
import { background_600 } from '../palette/background.colors';
import { gray_100 } from '../palette/gray.colors';
import { yellow_400 } from '../palette/yellow.colors';
import { inputBackground, inputBorder, inputForeground } from './input.colors';

const settingColors: EditorColors = {
  settings: {
    checkboxBackground: inputBackground,
    checkboxBorder: inputBorder,
    checkboxForeground: inputForeground,
    dropdownBackground: inputBackground,
    dropdownBorder: inputBorder,
    dropdownForeground: inputForeground,
    dropdownListBorder: background_600,
    headerForeground: gray_100,
    modifiedItemIndicator: yellow_400,
    numberInputBackground: inputBackground,
    numberInputBorder: inputBorder,
    numberInputForeground: inputForeground,
    textInputBackground: inputBackground,
    textInputBorder: inputBorder,
    textInputForeground: inputForeground
  }
};

export default settingColors;
