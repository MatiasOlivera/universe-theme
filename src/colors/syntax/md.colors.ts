import { SyntaxColors } from '../../types/colors-types';

const mdColors: SyntaxColors = (palette) => {
  const { purple, pink, teal, blue, orange, green } = palette;

  return [
    /**
     * Heading
     */
    {
      name: 'MD: Heading',
      scope: 'markup.heading.markdown',
      settings: {
        foreground: purple[2]
      }
    },
    {
      name: 'MD: Heading punctuation (# title)',
      scope: 'punctuation.definition.heading.markdown',
      settings: {
        foreground: purple[1]
      }
    },

    /**
     * Style
     */
    {
      name: 'MD: Bold text',
      scope: 'markup.bold.markdown',
      settings: {
        foreground: pink[1],
        fontStyle: 'bold'
      }
    },
    {
      name: 'MD: Bold puntuation (**text**)',
      scope: 'punctuation.definition.bold.markdown',
      settings: {
        foreground: pink[1]
      }
    },

    {
      name: 'MD: Italic text',
      scope: 'markup.italic.markdown',
      settings: {
        foreground: orange[2],
        fontStyle: 'italic'
      }
    },
    {
      name: 'MD: Italic puntuation (__text__)',
      scope: 'punctuation.definition.italic.markdown',
      settings: {
        foreground: orange[1]
      }
    },

    /**
     * Quote
     */

    {
      name: 'MD: Quote',
      scope: 'markup.quote.markdown',
      settings: {
        foreground: green[2]
      }
    },
    {
      name: 'MD: Quote puntuaction (> text)',
      scope: 'punctuation.definition.quote.begin.markdown',
      settings: {
        foreground: green[1]
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
        foreground: blue[1]
      }
    },
    {
      name: 'MD: Link',
      scope: [
        'markup.underline.link.markdown',
        'markup.underline.link.image.markdown'
      ],
      settings: {
        foreground: blue[2]
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
        foreground: blue[1]
      }
    },

    /**
     * Code
     */
    {
      name: 'MD: Inline code',
      scope: 'markup.inline.raw.string.markdown',
      settings: {
        foreground: teal[2]
      }
    },
    {
      name: 'MD: Block code',
      scope: 'markup.raw.block.markdown',
      settings: {
        foreground: teal[2]
      }
    },

    {
      name: 'MD: List puntuation',
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: purple[2]
      }
    }
  ];
};

export default mdColors;
