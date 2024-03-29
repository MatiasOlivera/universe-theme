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
      name: 'Pug: Tag',
      scope: ['meta.tag.sgml.doctype.html', 'entity.name.tag.pug'],
      settings: tokens.html.tag.name
    },
    {
      name: 'Pug: Attribute',
      scope: 'entity.other.attribute-name.tag.pug',
      settings: tokens.html.tag.attribute
    },
    {
      name: 'Pug: Value',
      scope: 'attribute_value string.quoted.pug',
      settings: tokens.html.tag.value
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
     * Modules
     */
    {
      name: "Pug: Include file's path",
      scope: 'variable.control.import.include.pug',
      settings: tokens.module.path
    },

    /**
     * Other
     */
    {
      name: 'Pug: Punctuation',
      scope: [
        'string.interpolated.pug',
        'constant.name.attribute.tag.pug',
        'meta.tag.other attribute_value'
      ],
      settings: tokens.punctuation.default
    },
    {
      name: 'Text',
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
