import { SyntaxColors } from '../../types/colors-types';
import { cssTokens } from './css.colors';
import { htmlTokens } from './html.colors';

const pugColors: SyntaxColors = (palette) => {
  const { classColor, idColor } = cssTokens(palette);
  const { tagColor, textColor } = htmlTokens(palette);

  return [
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
};

export default pugColors;
