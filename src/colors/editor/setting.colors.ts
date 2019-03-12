import { EditorColors } from '../../types/colors-types';
import { background_3, background_4, background_5 } from '../palette/background.colors';
import { slate_0 } from '../palette/slate.colors';

const settingColors: EditorColors = {
  settings: {
    checkboxBackground: background_4,
    checkboxBorder: background_3,
    checkboxForeground: slate_0,
    dropdownBackground: background_4,
    dropdownBorder: background_3,
    dropdownForeground: slate_0,
    dropdownListBorder: background_5,
    headerForeground: slate_0,
    modifiedItemIndicator: '#f4da55',
    numberInputBackground: background_4,
    numberInputBorder: background_3,
    numberInputForeground: slate_0,
    textInputBackground: background_4,
    textInputBorder: background_3,
    textInputForeground: slate_0
  }
};

export default settingColors;
