import { SyntaxColors } from '../../types/colors-types';

const pugColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Keywords
     */
    {
      name: 'Constant',
      scope: 'constant',
      settings: tokens.tag.name
    },

    /**
     * CSS
     */
    {
      name: 'Pug ID',
      scope: 'entity.other.attribute-name.id.pug',
      settings: tokens.css.id
    },
    {
      name: 'Pug class',
      scope: 'entity.other.attribute-name.class.pug',
      settings: tokens.css.class
    },

    /**
     * Other
     */
    {
      name: 'Text', // text
      scope: 'text.pug',
      settings: tokens.text
    }
  ];
};

export default pugColors;
