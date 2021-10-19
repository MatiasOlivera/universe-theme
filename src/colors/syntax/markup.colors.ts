import { SyntaxColors } from '../../types/colors-types';

const markupColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Heading
     */
    {
      name: 'Markup: Heading',
      scope: 'markup.heading',
      settings: tokens.markup.heading
    },

    /**
     * Style
     */
    {
      name: 'Markup: Bold text',
      scope: 'markup.bold',
      settings: tokens.markup.bold
    },
    {
      name: 'Markup: Italic text',
      scope: 'markup.italic',
      settings: tokens.markup.italic
    },
    {
      name: 'Markup: Underline text',
      scope: 'markup.underline',
      settings: tokens.markup.underline
    },

    /**
     * Link
     */
    {
      name: 'Markup: Link',
      scope: 'markup.underline.link',
      settings: tokens.markup.link
    },

    /**
     * Quote
     */
    {
      name: 'Markup: Quote',
      scope: 'markup.quote',
      settings: tokens.markup.quote
    },

    /**
     * Raw text (code)
     */
    {
      name: 'Markup: Raw text',
      scope: 'markup.raw',
      settings: tokens.markup.raw
    },

    /**
     * List items
     */
    {
      name: 'Markup: Numbered list items',
      scope: 'markup.list.numbered',
      settings: tokens.markup.list.numbered
    },
    {
      name: 'Markup: Unnumbered list items',
      scope: 'markup.list.unnumbered',
      settings: tokens.markup.list.unnumbered
    }
  ];
};

export default markupColors;
