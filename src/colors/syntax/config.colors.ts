import { SyntaxColors } from '../../types/colors-types';

/**
 * Extensions: .ini, .editorconfig
 */

const configColors: SyntaxColors = (palette) => {
  const { gray, purple, pink } = palette;

  return [
    {
      name: 'Group title',
      scope: 'entity.name.section.group-title.ini',
      settings: {
        foreground: gray[0]
      }
    },
    {
      name: 'Property',
      scope: 'keyword.other.definition.ini',
      settings: {
        foreground: purple[2]
      }
    },
    {
      name: 'Value',
      scope: 'source.ini',
      settings: {
        foreground: pink[1]
      }
    },
    {
      name: 'Separator',
      scope: 'punctuation.separator.key-value.ini',
      settings: {
        foreground: gray[0]
      }
    }
  ];
};

export default configColors;
