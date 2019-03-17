import { TokenColors } from '../../types/colors-types';
import { tagColor, textColor } from './html.colors';

const pugColors: TokenColors = [
  /**
   * Keywords
   */
  {
    name: 'Constant',
    scope: 'constant',
    settings: {
      foreground: tagColor
    }
  },

  /**
   * Other
   */
  {
    name: 'Text',
    scope: 'text.pug',
    settings: {
      foreground: textColor
    }
  }
];

export default pugColors;
