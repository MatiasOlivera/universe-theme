import { SyntaxColors } from '../../types/colors-types';

const commonColors: SyntaxColors = (palette) => {
  const {
    purple,
    blue,
    pink,
    indigo,
    green,
    red,
    gray,
    teal,
    orange,
    blueGray
  } = palette;

  return [
    /**
     * Keywords
     */
    {
      name: 'Keywords',
      scope: ['keyword', 'storage.type', 'support.type'],
      settings: {
        foreground: purple[2]
      }
    },
    {
      name: 'Language variable',
      scope: ['variable.language', 'support.variable'],
      settings: {
        foreground: purple[2]
      }
    },
    {
      name: 'Language class',
      scope: 'support.class',
      settings: {
        foreground: blue[2]
      }
    },
    {
      name: 'Modifier',
      scope: 'storage.modifier',
      settings: {
        foreground: purple[2]
      }
    },

    /**
     * Variables
     */
    {
      name: 'Variable',
      scope: 'variable',
      settings: {
        foreground: pink[1]
      }
    },
    {
      name: 'Constant',
      scope: 'variable.other.constant',
      settings: {
        foreground: pink[1]
      }
    },

    /**
     * Objects
     */
    {
      name: 'Object variable',
      scope: 'variable.other.object',
      settings: {
        foreground: pink[1]
      }
    },
    {
      name: 'Variable property value',
      scope: 'variable.other.property',
      settings: {
        foreground: pink[1]
      }
    },
    {
      name: 'Object property',
      scope: [
        'string.unquoted',
        'meta.object-literal.key',
        'variable.object.property'
      ],
      settings: {
        foreground: indigo[2]
      }
    },

    /**
     * Functions
     */
    {
      name: 'Function definition',
      scope: 'entity.name.function',
      settings: {
        foreground: blue[2]
      }
    },
    {
      name: 'Language function',
      scope: 'support.function',
      settings: {
        foreground: blue[2]
      }
    },
    {
      name: 'Function parameter',
      scope: 'variable.parameter',
      settings: {
        foreground: pink[1]
      }
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
      settings: {
        foreground: blue[2]
      }
    },
    {
      name: 'Instance',
      scope: ['entity.name.type.instance', 'variable.other.class'],
      settings: {
        foreground: blue[2]
      }
    },

    /**
     * Modules
     */
    {
      name: 'Module name',
      scope: 'entity.name.type.module',
      settings: {
        foreground: blue[2]
      }
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
      settings: {
        foreground: green[2]
      }
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        foreground: orange[2]
      }
    },
    {
      name: 'Primitive type',
      scope: 'support.type.primitive',
      settings: {
        foreground: teal[2]
      }
    },
    {
      name: 'Language constant (boolean, null)',
      scope: 'constant.language',
      settings: {
        foreground: purple[2]
      }
    },
    {
      name: 'Custom type',
      scope: 'entity.name.type',
      settings: {
        foreground: teal[2]
      }
    },

    /**
     * Other
     */
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: blueGray[3]
      }
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: red[2]
      }
    },

    /**
     * Punctuation
     */
    {
      name: 'Symbols',
      scope: 'punctuation',
      settings: {
        fontStyle: '' // Inherit the element color
      }
    },
    {
      name: 'Punctuation for embedded section (eg: interpolated strings)',
      scope: 'punctuation.section.embedded',
      settings: {
        foreground: purple[2]
      }
    }
  ];
};

export default commonColors;
