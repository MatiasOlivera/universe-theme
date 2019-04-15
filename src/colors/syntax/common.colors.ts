import { SyntaxColors } from '../../types/colors-types';

const commonColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Keywords
     */
    {
      name: 'Keywords',
      scope: ['keyword', 'support.type'],
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

    {
      name: 'Language variable',
      scope: ['variable.language', 'support.variable'],
      settings: tokens.type.languageConstant.default
    },
    {
      name: 'Language class',
      scope: 'support.class',
      settings: tokens.type.typeName
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
      scope: ['meta.object-literal.key', 'variable.object.property'],
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
      name: 'Primitive type',
      scope: 'support.type.primitive',
      settings: tokens.type.primitive
    },
    {
      name: 'Language constant (boolean, null)',
      scope: 'constant.language',
      settings: tokens.type.languageConstant.default
    },
    {
      name: 'Other constant',
      scope: 'constant.other',
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
    {
      name: 'Tag angle brackets',
      scope: [
        'punctuation.definition.tag.begin',
        'punctuation.definition.tag.end'
      ],
      settings: tokens.tag.name
    },

    /**
     * Comments
     */
    {
      name: 'Comment',
      scope: 'comment',
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
