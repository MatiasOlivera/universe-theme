import { TokenColors } from '../../types/colors-types';
import { blue_0, blue_1 } from '../palette/blue.colors';
import { cyan_1 } from '../palette/cyan.colors';
import { green_0, green_1 } from '../palette/green.colors';
import { orange_100, orange_200 } from '../palette/orange.colors';
import { pink_0, pink_1 } from '../palette/pink.colors';
import { violet_1, violet_2 } from '../palette/violet.colors';

const mdColors: TokenColors = [
  /**
   * Heading
   */
  {
    name: 'MD: Heading',
    scope: 'markup.heading.markdown',
    settings: {
      foreground: violet_1
    }
  },
  {
    name: 'MD: Heading punctuation (# title)',
    scope: 'punctuation.definition.heading.markdown',
    settings: {
      foreground: violet_2
    }
  },

  /**
   * Style
   */
  {
    name: 'MD: Bold text',
    scope: 'markup.bold.markdown',
    settings: {
      foreground: pink_1,
      fontStyle: 'bold'
    }
  },
  {
    name: 'MD: Bold puntuation (**text**)',
    scope: 'punctuation.definition.bold.markdown',
    settings: {
      foreground: pink_0
    }
  },

  {
    name: 'MD: Italic text',
    scope: 'markup.italic.markdown',
    settings: {
      foreground: orange_200,
      fontStyle: 'italic'
    }
  },
  {
    name: 'MD: Italic puntuation (__text__)',
    scope: 'punctuation.definition.italic.markdown',
    settings: {
      foreground: orange_100
    }
  },

  /**
   * Quote
   */

  {
    name: 'MD: Quote',
    scope: 'markup.quote.markdown',
    settings: {
      foreground: green_1
    }
  },
  {
    name: 'MD: Quote puntuaction (> text)',
    scope: 'punctuation.definition.quote.begin.markdown',
    settings: {
      foreground: green_0
    }
  },

  /**
   * Link
   */
  {
    name: 'MD: Link title',
    scope: [
      'string.other.link.description.markdown',
      'string.other.link.title.markdown'
    ],
    settings: {
      foreground: blue_0
    }
  },
  {
    name: 'MD: Link',
    scope: [
      'markup.underline.link.markdown',
      'markup.underline.link.image.markdown'
    ],
    settings: {
      foreground: blue_1
    }
  },
  {
    name: 'MD: Link punctuation',
    scope: [
      'punctuation.definition.string.begin.markdown',
      'punctuation.definition.string.end.markdown',
      'punctuation.definition.metadata.markdown'
    ],
    settings: {
      foreground: blue_0
    }
  },

  /**
   * Code
   */
  {
    name: 'MD: Inline code',
    scope: 'markup.inline.raw.string.markdown',
    settings: {
      foreground: cyan_1
    }
  },
  {
    name: 'MD: Block code',
    scope: 'markup.raw.block.markdown',
    settings: {
      foreground: cyan_1
    }
  },

  {
    name: 'MD: List puntuation',
    scope: 'punctuation.definition.list.begin.markdown',
    settings: {
      foreground: violet_1
    }
  }
];

export default mdColors;
