import { TokenColors } from '../../types/colors-types';
import { blue_200, blue_300 } from '../palette/blue.colors';
import { green_200, green_300 } from '../palette/green.colors';
import { orange_200, orange_300 } from '../palette/orange.colors';
import { pink_200, pink_300 } from '../palette/pink.colors';
import { purple_300 } from '../palette/purple.colors';
import { teal_300 } from '../palette/teal.colors';

const mdColors: TokenColors = [
  /**
   * Heading
   */
  {
    name: 'MD: Heading',
    scope: 'markup.heading.markdown',
    settings: {
      foreground: purple_300
    }
  },
  {
    name: 'MD: Heading punctuation (# title)',
    scope: 'punctuation.definition.heading.markdown',
    settings: {
      foreground: purple_300
    }
  },

  /**
   * Style
   */
  {
    name: 'MD: Bold text',
    scope: 'markup.bold.markdown',
    settings: {
      foreground: pink_300,
      fontStyle: 'bold'
    }
  },
  {
    name: 'MD: Bold puntuation (**text**)',
    scope: 'punctuation.definition.bold.markdown',
    settings: {
      foreground: pink_200
    }
  },

  {
    name: 'MD: Italic text',
    scope: 'markup.italic.markdown',
    settings: {
      foreground: orange_300,
      fontStyle: 'italic'
    }
  },
  {
    name: 'MD: Italic puntuation (__text__)',
    scope: 'punctuation.definition.italic.markdown',
    settings: {
      foreground: orange_200
    }
  },

  /**
   * Quote
   */

  {
    name: 'MD: Quote',
    scope: 'markup.quote.markdown',
    settings: {
      foreground: green_300
    }
  },
  {
    name: 'MD: Quote puntuaction (> text)',
    scope: 'punctuation.definition.quote.begin.markdown',
    settings: {
      foreground: green_200
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
      foreground: blue_200
    }
  },
  {
    name: 'MD: Link',
    scope: [
      'markup.underline.link.markdown',
      'markup.underline.link.image.markdown'
    ],
    settings: {
      foreground: blue_300
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
      foreground: blue_200
    }
  },

  /**
   * Code
   */
  {
    name: 'MD: Inline code',
    scope: 'markup.inline.raw.string.markdown',
    settings: {
      foreground: teal_300
    }
  },
  {
    name: 'MD: Block code',
    scope: 'markup.raw.block.markdown',
    settings: {
      foreground: teal_300
    }
  },

  {
    name: 'MD: List puntuation',
    scope: 'punctuation.definition.list.begin.markdown',
    settings: {
      foreground: purple_300
    }
  }
];

export default mdColors;
