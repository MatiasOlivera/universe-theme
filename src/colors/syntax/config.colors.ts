import { TokenColors } from '../../types/colors-types';
import { pink_1 } from '../palette/pink.colors';
import { purple_300 } from '../palette/purple.colors';
import { slate_0 } from '../palette/slate.colors';

/**
 * Extensions: .ini, .editorconfig
 */

const configColors: TokenColors = [
  {
    name: 'Group title',
    scope: 'entity.name.section.group-title.ini',
    settings: {
      foreground: slate_0
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
      foreground: pink_1
    }
  },
  {
    name: 'Separator',
    scope: 'punctuation.separator.key-value.ini',
    settings: {
      foreground: slate_0
    }
  }
];

export default configColors;
