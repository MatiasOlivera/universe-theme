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
     * Tags
     */
    {
      name: 'Pug: Tag name',
      scope: ['meta.tag.sgml.doctype.html', 'entity.name.tag.pug'],
      settings: tokens.html.tag.name
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
    },
    {
      name: 'Pug: Comment',
      scope: 'string.comment.buffered.block.pug',
      settings: tokens.comment
    }
  ];
};

export default pugColors;
