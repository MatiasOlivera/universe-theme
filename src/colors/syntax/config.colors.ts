import { SyntaxColors } from '../../types/colors-types';

/**
 * Extensions: .ini, .editorconfig
 */

const configColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'Group title',
      scope: 'entity.name.section.group-title.ini',
      settings: tokens.config.groupTitle
    },
    {
      name: 'Property',
      scope: 'keyword.other.definition.ini',
      settings: tokens.config.key
    },
    {
      name: 'Value',
      scope: 'source.ini',
      settings: tokens.config.value
    }
  ];
};

export default configColors;
