import { EditorColors } from '../../types/colors-types';
import { background_400, background_500, background_600 } from '../palette/background.colors';
import { gray_100 } from '../palette/gray.colors';
import { yellow_400 } from '../palette/yellow.colors';

const settingColors: EditorColors = {
  settings: {
    checkboxBackground: background_500,
    checkboxBorder: background_400,
    checkboxForeground: gray_100,
    dropdownBackground: background_500,
    dropdownBorder: background_400,
    dropdownForeground: gray_100,
    dropdownListBorder: background_600,
    headerForeground: gray_100,
    modifiedItemIndicator: yellow_400,
    numberInputBackground: background_500,
    numberInputBorder: background_400,
    numberInputForeground: gray_100,
    textInputBackground: background_500,
    textInputBorder: background_400,
    textInputForeground: gray_100
  }
};

export default settingColors;
