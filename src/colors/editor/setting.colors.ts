import { EditorColors } from '../../types/colors-types';
import { background_400, background_500, background_600 } from '../palette/background.colors';
import { slate_0 } from '../palette/slate.colors';
import { yellow_400 } from '../palette/yellow.colors';

const settingColors: EditorColors = {
  settings: {
    checkboxBackground: background_500,
    checkboxBorder: background_400,
    checkboxForeground: slate_0,
    dropdownBackground: background_500,
    dropdownBorder: background_400,
    dropdownForeground: slate_0,
    dropdownListBorder: background_600,
    headerForeground: slate_0,
    modifiedItemIndicator: yellow_400,
    numberInputBackground: background_500,
    numberInputBorder: background_400,
    numberInputForeground: slate_0,
    textInputBackground: background_500,
    textInputBorder: background_400,
    textInputForeground: slate_0
  }
};

export default settingColors;
