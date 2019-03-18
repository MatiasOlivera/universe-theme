import { TokenColors } from '../../types/colors-types';
import { classColor, idColor } from './css.colors';
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
   * CSS
   */
  {
    name: 'Pug ID',
    scope: 'entity.other.attribute-name.id.pug',
    settings: {
      foreground: idColor
    }
  },
  {
    name: 'Pug class',
    scope: 'entity.other.attribute-name.class.pug',
    settings: {
      foreground: classColor
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
