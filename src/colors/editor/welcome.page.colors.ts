import { EditorColors } from '../../types/colors-types';
import { background_600, background_700 } from '../palette/background.colors';
import { purple_800 } from '../palette/purple.colors';

const welcomePageColors: EditorColors = {
  walkThrough: {
    embeddedEditorBackground: background_600
  },
  welcomePage: {
    background: background_600,
    buttonBackground: background_700,
    buttonHoverBackground: purple_800
  }
};

export default welcomePageColors;
