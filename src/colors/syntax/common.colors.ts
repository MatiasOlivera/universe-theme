import { TokenColors } from '../../types/colors-types';
import { blue_2 } from '../palette/blue.colors';
import { cyan_1, cyan_2 } from '../palette/cyan.colors';
import { green_200 } from '../palette/green.colors';
import { orange_200 } from '../palette/orange.colors';
import { pink_1 } from '../palette/pink.colors';
import { red_300 } from '../palette/red.colors';
import { slate_3 } from '../palette/slate.colors';
import { violet_2 } from '../palette/violet.colors';

const commonColors: TokenColors = [
  /**
   * Keywords
   */
  {
    name: 'Keywords',
    scope: ['keyword', 'storage.type', 'support.type'],
    settings: {
      foreground: violet_2
    }
  },
  {
    name: 'Language variable',
    scope: ['variable.language', 'support.variable'],
    settings: {
      foreground: violet_2
    }
  },
  {
    name: 'Language class',
    scope: 'support.class',
    settings: {
      foreground: violet_2
    }
  },
  {
    name: 'Modifier',
    scope: 'storage.modifier',
    settings: {
      foreground: violet_2
    }
  },

  /**
   * Variables
   */
  {
    name: 'Variable',
    scope: 'variable',
    settings: {
      foreground: pink_1
    }
  },
  {
    name: 'Constant',
    scope: 'variable.other.constant',
    settings: {
      foreground: pink_1
    }
  },

  /**
   * Objects
   */
  {
    name: 'Object variable',
    scope: 'variable.other.object',
    settings: {
      foreground: pink_1
    }
  },
  {
    name: 'Variable property value',
    scope: 'variable.other.property',
    settings: {
      foreground: pink_1
    }
  },
  {
    name: 'Object property',
    scope: ['string.unquoted', 'meta.object-literal.key'],
    settings: {
      foreground: cyan_1
    }
  },

  /**
   * Functions
   */
  {
    name: 'Function definition',
    scope: 'entity.name.function',
    settings: {
      foreground: blue_2
    }
  },
  {
    name: 'Language function',
    scope: 'support.function',
    settings: {
      foreground: blue_2
    }
  },
  {
    name: 'Function parameter',
    scope: 'variable.parameter',
    settings: {
      foreground: pink_1
    }
  },

  /**
   * Classes
   */
  {
    name: 'Class name',
    scope: [
      'entity.name.class',
      'variable.other.class',
      'entity.name.type.class',
      'entity.other.inherited-class'
    ],
    settings: {
      foreground: cyan_2
    }
  },
  {
    name: 'Instance',
    scope: 'entity.name.type.instance',
    settings: {
      foreground: cyan_2
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
      foreground: green_200
    }
  },
  {
    name: 'Number',
    scope: 'constant.numeric',
    settings: {
      foreground: orange_200
    }
  },
  {
    name: 'Primitive type',
    scope: 'support.type.primitive',
    settings: {
      foreground: orange_200
    }
  },
  {
    name: 'Module name',
    scope: 'entity.name.type.module',
    settings: {
      foreground: pink_1
    }
  },
  {
    name: 'Language constant (boolean, null)',
    scope: 'constant.language',
    settings: {
      foreground: violet_2
    }
  },
  {
    name: 'Custom type',
    scope: 'entity.name.type',
    settings: {
      foreground: orange_200
    }
  },

  /**
   * Other
   */
  {
    name: 'Comment',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      foreground: slate_3
    }
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: red_300
    }
  },
  {
    name: 'Symbols',
    scope: 'punctuation',
    settings: {
      fontStyle: '' // Inherit the element color
    }
  }
];

export default commonColors;
