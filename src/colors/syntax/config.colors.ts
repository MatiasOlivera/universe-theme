import { TokenColors } from '../../types/colors-types';
import { pink_1 } from '../palette/pink.colors';
import { slate_0 } from '../palette/slate.colors';
import { violet_2 } from '../palette/violet.colors';

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
      foreground: violet_2
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
