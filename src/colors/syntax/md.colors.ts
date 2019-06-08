import { SyntaxColors } from '../../types/colors-types';

const mdColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Heading
     */
    {
      name: 'MD: Heading punctuation (# title)',
      scope: 'punctuation.definition.heading.markdown',
      settings: tokens.markdown.puntuaction.heading
    },

    /**
     * Style
     */
    {
      name: 'MD: Bold puntuation (**text**)',
      scope: 'punctuation.definition.bold.markdown',
      settings: tokens.markdown.puntuaction.bold
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
      name: 'MD: Link punctuation',
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.definition.metadata.markdown'
      ],
      settings: tokens.markdown.linkTitle
    },

    /**
     * Raw text (code)
     */
    {
      name: 'MD: Inline code',
      scope: 'markup.inline.raw.string.markdown',
      settings: tokens.markup.raw
    },

    /**
     * Lists
     */
    {
      name: 'MD: List puntuation',
      scope: 'punctuation.definition.list.begin.markdown',
      settings: tokens.markdown.puntuaction.list
    },

    /**
     * Separator
     */
    {
      name: 'MD: Separator',
      scope: 'meta.separator.markdown',
      settings: tokens.markdown.puntuaction.separator
    }
  ];
};

export default mdColors;
