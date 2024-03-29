import { SyntaxColors } from '../../types/colors-types';

const commonColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Keywords
     */
    {
      name: 'Keywords',
      scope: 'keyword',
      settings: tokens.keyword.default
    },
    {
      name: 'Flow control',
      scope: 'keyword.control',
      settings: tokens.keyword.control
    },
    {
      name: 'Operator',
      scope: 'keyword.operator',
      settings: tokens.keyword.operator
    },
    {
      name: 'Type name (class, function, int, var)',
      scope: 'storage.type',
      settings: tokens.type.typeName
    },
    {
      name: 'Modifier (static, final, abstract)',
      scope: 'storage.modifier',
      settings: tokens.keyword.modifier
    },
    {
      name: 'Other keywords',
      scope: 'keyword.other',
      settings: tokens.keyword.other
    },

    /**
     * Variables
     */
    {
      name: 'Variable',
      scope: 'variable',
      settings: tokens.variable.default
    },
    {
      name: 'Other variable',
      scope: 'variable.other',
      settings: tokens.variable.other
    },
    {
      name: 'Language variable (this, super, self)',
      scope: 'variable.language',
      settings: tokens.keyword.other
    },
    {
      name: 'Library variable',
      scope: 'support.variable',
      settings: tokens.variable.other
    },

    /**
     * Objects
     */
    {
      name: 'Object property',
      scope: [
        'meta.object-literal.key',
        'variable.object.property',
        'support.variable.property',
        'variable.other.property'
      ],
      settings: tokens.object.property
    },

    {
      name: 'Intermediate object property',
      scope: 'variable.other.object.property',
      settings: tokens.object.intermediateProperty
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
      name: 'Library function',
      scope: 'support.function',
      settings: tokens.function.library
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
    {
      name: 'Library class',
      scope: 'support.class',
      settings: tokens.class.library
    },

    /**
     * Types
     */
    {
      name: 'Character',
      scope: 'constant.character',
      settings: tokens.type.character.default
    },
    {
      name: 'Escape character',
      scope: 'constant.character.escape',
      settings: tokens.type.character.escape
    },
    {
      name: 'String',
      scope: [
        'string',
        'string.quoted',
        'string.unquoted',
        'string.interpolated',
        'string.regexp',
        'string.other'
      ],
      settings: tokens.type.string
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: tokens.type.number
    },
    {
      name: 'Library type',
      scope: 'support.type',
      settings: tokens.type.library
    },
    {
      name: 'Language constant (boolean, null)',
      scope: 'constant.language',
      settings: tokens.type.constant.language
    },
    {
      name: 'Library constant',
      scope: 'support.constant',
      settings: tokens.type.constant.library
    },
    {
      name: 'Constant',
      scope: ['constant.other', 'support.other', 'variable.other.constant'],
      settings: tokens.type.other
    },
    {
      name: 'Custom type',
      scope: 'entity.name.type',
      settings: tokens.type.custom
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
     * Tags
     */
    {
      name: 'Tag',
      scope: 'entity.name.tag',
      settings: tokens.tag.name
    },

    /**
     * Comments
     */
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: tokens.comment
    },

    /**
     * Invalid
     */
    {
      name: 'Invalid',
      scope: 'invalid.illegal',
      settings: tokens.invalid.illegal
    },
    {
      name: 'Deprecated',
      scope: 'invalid.deprecated',
      settings: tokens.invalid.deprecated
    },

    /**
     * Punctuation marks
     */
    {
      name: 'Punctuation marks',
      scope: 'punctuation',
      settings: tokens.punctuation.default
    }
  ];
};

export default commonColors;
