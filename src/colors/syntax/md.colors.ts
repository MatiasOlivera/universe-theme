import { SyntaxColors } from '../../types/colors-types';

const mdColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Text
     */
    {
      name: 'MD: Paragraph',
      scope: 'meta.paragraph.markdown',
      settings: tokens.markup.other
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
      settings: tokens.markdown.link.title
    },

    /**
     * Raw text (code)
     */
    {
      name: 'MD: Inline code',
      scope: 'markup.inline.raw.string.markdown',
      settings: tokens.markup.raw
    }
  ];
};

export default mdColors;
