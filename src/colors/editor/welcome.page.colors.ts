import { EditorColors } from '../../types/colors-types';
import { background_5, background_6 } from '../palette/background.colors';
import { purple_800 } from '../palette/purple.colors';

const welcomePageColors: EditorColors = {
  walkThrough: {
    embeddedEditorBackground: background_5
  },
  welcomePage: {
    background: background_5,
    buttonBackground: background_6,
    buttonHoverBackground: purple_800
  }
};

export default welcomePageColors;
