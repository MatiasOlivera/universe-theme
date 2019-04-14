import { SyntaxColors } from '../../types/colors-types';

const mdColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Heading
     */
    {
      name: 'MD: Heading', // markup.heading
      scope: 'markup.heading.markdown',
      settings: tokens.markup.heading
    },
    {
      name: 'MD: Heading punctuation (# title)',
      scope: 'punctuation.definition.heading.markdown',
      settings: tokens.markdown.puntuaction.heading
    },

    /**
     * Style
     */
    {
      name: 'MD: Bold text', // markup.bold
      scope: 'markup.bold.markdown',
      settings: tokens.markup.bold
    },
    {
      name: 'MD: Bold puntuation (**text**)',
      scope: 'punctuation.definition.bold.markdown',
      settings: tokens.markdown.puntuaction.bold
    },

    {
      name: 'MD: Italic text', // markup.italic
      scope: 'markup.italic.markdown',
      settings: tokens.markup.italic
    },
    {
      name: 'MD: Italic puntuation (__text__)',
      scope: 'punctuation.definition.italic.markdown',
      settings: tokens.markdown.puntuaction.italic
    },

    /**
     * Quote
     */

    {
      name: 'MD: Quote', // markup.quote
      scope: 'markup.quote.markdown',
      settings: tokens.markup.quote
    },
    {
      name: 'MD: Quote puntuaction (> text)',
      scope: 'punctuation.definition.quote.begin.markdown',
      settings: tokens.markdown.puntuaction.quote
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
      settings: tokens.markdown.linkTitle
    },
    {
      name: 'MD: Link', // markup.link
      scope: [
        'markup.underline.link.markdown',
        'markup.underline.link.image.markdown'
      ],
      settings: tokens.markup.link
    },
    {
      name: 'MD: Link punctuation',
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.definition.metadata.markdown'
      ],
      settings: tokens.markdown.linkTitle
    },

    /**
     * Code
     */
    {
      name: 'MD: Inline code',
      scope: 'markup.inline.raw.string.markdown',
      settings: tokens.markup.raw
    },
    {
      name: 'MD: Block code',
      scope: 'markup.raw.block.markdown',
      settings: tokens.markup.raw
    },

    {
      name: 'MD: List puntuation',
      scope: 'punctuation.definition.list.begin.markdown',
      settings: tokens.markdown.puntuaction.list
    }
  ];
};

export default mdColors;
