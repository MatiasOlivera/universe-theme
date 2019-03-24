import { TokenColors } from '../../types/colors-types';
import { gray_100 } from '../palette/gray.colors';
import { pink_300 } from '../palette/pink.colors';
import { purple_300 } from '../palette/purple.colors';

/**
 * Extensions: .ini, .editorconfig
 */

const configColors: TokenColors = [
  {
    name: 'Group title',
    scope: 'entity.name.section.group-title.ini',
    settings: {
      foreground: gray_100
    }
  },
  {
    name: 'Property',
    scope: 'keyword.other.definition.ini',
    settings: {
      foreground: purple_300
    }
  },
  {
    name: 'Value',
    scope: 'source.ini',
    settings: {
      foreground: pink_300
    }
  },
  {
    name: 'Separator',
    scope: 'punctuation.separator.key-value.ini',
    settings: {
      foreground: gray_100
    }
  }
];

export default configColors;
