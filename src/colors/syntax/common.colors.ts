import { TokenColors } from '../../types/colors-types';
import { blue_2 } from '../palette/blue.colors';
import { cyan_2 } from '../palette/cyan.colors';
import { green_1, green_2 } from '../palette/green.colors';
import { orange_2 } from '../palette/orange.colors';
import { pink_1, pink_2 } from '../palette/pink.colors';
import { red_2 } from '../palette/red.colors';
import { slate_0, slate_3 } from '../palette/slate.colors';
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
    scope: 'variable.language',
    settings: {
      foreground: violet_2
    }
  },
  {
    name: 'Language constant',
    scope: 'constant.language',
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
   * Scalars
   */
  {
    name: 'String',
    scope: 'string.quoted',
    settings: {
      foreground: green_2
    }
  },
  {
    name: 'Number',
    scope: 'constant.numeric',
    settings: {
      foreground: orange_2
    }
  },

  /**
   * Variables
   */
  {
    name: 'Variable',
    scope: ['variable', 'string.unquoted'],
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
      foreground: pink_2
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

  /**
   * Classes
   */
  {
    name: 'Class name',
    scope: ['entity.name.class', 'variable.other.class'],
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
   * Other
   */
  {
    name: 'Comment',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      foreground: slate_3,
      fontStyle: 'italic'
    }
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: red_2
    }
  },
  {
    name: 'Symbols',
    scope: 'punctuation',
    settings: {
      foreground: slate_0
    }
  }
];

export default commonColors;
