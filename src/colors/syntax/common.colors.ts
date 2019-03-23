import { TokenColors } from '../../types/colors-types';
import { blue_300 } from '../palette/blue.colors';
import { gray_400 } from '../palette/gray.colors';
import { green_200 } from '../palette/green.colors';
import { orange_200 } from '../palette/orange.colors';
import { pink_200 } from '../palette/pink.colors';
import { purple_300 } from '../palette/purple.colors';
import { red_300 } from '../palette/red.colors';
import { teal_200, teal_300 } from '../palette/teal.colors';

const commonColors: TokenColors = [
  /**
   * Keywords
   */
  {
    name: 'Keywords',
    scope: ['keyword', 'storage.type', 'support.type'],
    settings: {
      foreground: purple_300
    }
  },
  {
    name: 'Language variable',
    scope: ['variable.language', 'support.variable'],
    settings: {
      foreground: purple_300
    }
  },
  {
    name: 'Language class',
    scope: 'support.class',
    settings: {
      foreground: purple_300
    }
  },
  {
    name: 'Modifier',
    scope: 'storage.modifier',
    settings: {
      foreground: purple_300
    }
  },

  /**
   * Variables
   */
  {
    name: 'Variable',
    scope: 'variable',
    settings: {
      foreground: pink_200
    }
  },
  {
    name: 'Constant',
    scope: 'variable.other.constant',
    settings: {
      foreground: pink_200
    }
  },

  /**
   * Objects
   */
  {
    name: 'Object variable',
    scope: 'variable.other.object',
    settings: {
      foreground: pink_200
    }
  },
  {
    name: 'Variable property value',
    scope: 'variable.other.property',
    settings: {
      foreground: pink_200
    }
  },
  {
    name: 'Object property',
    scope: ['string.unquoted', 'meta.object-literal.key'],
    settings: {
      foreground: teal_200
    }
  },

  /**
   * Functions
   */
  {
    name: 'Function definition',
    scope: 'entity.name.function',
    settings: {
      foreground: blue_300
    }
  },
  {
    name: 'Language function',
    scope: 'support.function',
    settings: {
      foreground: blue_300
    }
  },
  {
    name: 'Function parameter',
    scope: 'variable.parameter',
    settings: {
      foreground: pink_200
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
      foreground: teal_300
    }
  },
  {
    name: 'Instance',
    scope: 'entity.name.type.instance',
    settings: {
      foreground: teal_300
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
      foreground: pink_200
    }
  },
  {
    name: 'Language constant (boolean, null)',
    scope: 'constant.language',
    settings: {
      foreground: purple_300
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
      foreground: gray_400
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
