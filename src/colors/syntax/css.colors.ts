import { SyntaxColors } from '../../types/colors-types';

const cssColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Selectors
     */
    {
      name: 'Tag',
      scope: ['entity.name.tag.css', 'meta.selector.css'],
      settings: tokens.css.tag
    },
    {
      name: 'ID',
      scope: 'entity.other.attribute-name.id.css',
      settings: tokens.css.id
    },
    {
      name: 'Class',
      scope: 'entity.other.attribute-name.class.css',
      settings: tokens.css.class
    },
    {
      name: 'Attribute name',
      scope: 'entity.other.attribute-name.css',
      settings: tokens.css.attribute.name
    },
    {
      name: 'Pseudo-class',
      scope: 'entity.other.attribute-name.pseudo-class.css',
      settings: tokens.css.pseudoClass
    },
    {
      name: 'Pseudo-element',
      scope: 'entity.other.attribute-name.pseudo-element.css',
      settings: tokens.css.pseudoElement
    },

    /**
     * Properties
     */
    {
      name: 'Property name',
      scope: [
        'support.type.property-name.css',
        'support.type.property-name.media.css'
      ],
      settings: tokens.css.property.name
    },
    {
      name: 'Vendor property name',
      scope: 'support.type.vendored.property-name.css',
      settings: tokens.css.property.name
    },

    /**
     * Values
     */
    {
      name: 'Property value',
      scope: 'meta.property-value.css',
      settings: tokens.css.property.value
    },
    {
      name: 'Function parameter',
      scope: ['variable.parameter.css', 'variable.parameter.url.css'],
      settings: tokens.css.function.parameter
    },
    {
      name: 'CSS: Number',
      scope: 'constant.numeric.css',
      settings: tokens.css.number
    },
    {
      name: 'Unit',
      scope: 'keyword.other.unit',
      settings: tokens.css.unit
    },

    /**
     * Other
     */
    {
      name: 'Other operators',
      scope: ['keyword.operator.logical.and.media.css'],
      settings: tokens.keyword.other
    }
  ];
};

export default cssColors;
