import { SyntaxColors } from '../../types/colors-types';

const commonColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Keywords
     */
    {
      name: 'Keywords',
      scope: ['keyword', 'storage.type', 'support.type'],
      settings: tokens.keyword.default
    },
    {
      name: 'Language variable',
      scope: ['variable.language', 'support.variable'],
      settings: tokens.type.special
    },
    {
      name: 'Language class',
      scope: 'support.class',
      settings: tokens.type.typeName
    },
    {
      name: 'Modifier',
      scope: 'storage.modifier',
      settings: tokens.keyword.modifier
    },

    /**
     * Variables
     */
    {
      name: 'Variable',
      scope: 'variable',
      settings: tokens.variable
    },
    {
      name: 'Constant',
      scope: 'variable.other.constant',
      settings: tokens.constant
    },

    /**
     * Objects
     */
    {
      name: 'Object variable',
      scope: 'variable.other.object',
      settings: tokens.variable
    },
    {
      name: 'Variable property value',
      scope: 'variable.other.property',
      settings: tokens.variable
    },
    {
      name: 'Object property',
      scope: [
        'string.unquoted',
        'meta.object-literal.key',
        'variable.object.property'
      ],
      settings: tokens.object.property
    },

    /**
     * Functions
     */
    {
      name: 'Function definition',
      scope: 'entity.name.function',
      settings: tokens.function.name
    },
    {
      name: 'Language function',
      scope: 'support.function',
      settings: tokens.function.name
    },
    {
      name: 'Function parameter',
      scope: 'variable.parameter',
      settings: tokens.function.parameter
    },

    /**
     * Classes
     */
    {
      name: 'Class name',
      scope: [
        'entity.name.class',
        'entity.name.type.class',
        'entity.other.inherited-class'
      ],
      settings: tokens.class.name
    },
    {
      name: 'Instance',
      scope: ['entity.name.type.instance', 'variable.other.class'],
      settings: tokens.class.name
    },

    /**
     * Modules
     */
    {
      name: 'Module name',
      scope: 'entity.name.type.module',
      settings: tokens.module.name
    },

    /**
     * Types
     */
    {
      name: 'String',
      scope: [
        'string',
        'string.quoted.single',
        'string.quoted.double',
        'string.quoted.template'
      ],
      settings: tokens.type.string
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: tokens.type.number
    },
    {
      name: 'Primitive type',
      scope: 'support.type.primitive',
      settings: tokens.type.primitive
    },
    {
      name: 'Language constant (boolean, null)',
      scope: 'constant.language',
      settings: tokens.type.special
    },
    {
      name: 'Custom type',
      scope: 'entity.name.type',
      settings: tokens.type.custom
    },

    /**
     * Other
     */
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: tokens.comment
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: tokens.invalid.illegal
    },

    /**
     * Punctuation
     */
    {
      name: 'Symbols',
      scope: 'punctuation',
      settings: tokens.puntuaction.default
    },
    {
      name: 'Punctuation for embedded section (eg: interpolated strings)',
      scope: 'punctuation.section.embedded',
      settings: tokens.puntuaction.embedded
    }
  ];
};

export default commonColors;
