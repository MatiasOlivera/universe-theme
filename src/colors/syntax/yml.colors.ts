import { TokenColors } from '../../types/colors-types';
import { blue_300 } from '../palette/blue.colors';
import { green_300 } from '../palette/green.colors';
import { pink_300 } from '../palette/pink.colors';
import { purple_300 } from '../palette/purple.colors';

const ymlColors: TokenColors = [
  /**
   * Scalars
   */
  {
    name: 'Boolean',
    scope: 'constant.language.boolean.yaml',
    settings: {
      foreground: purple_300
    }
  },
  {
    name: 'Number',
    scope: 'constant.numeric.integer.yaml',
    settings: {
      foreground: blue_300
    }
  },
  {
    name: 'String',
    scope: 'string.unquoted.plain.out.yaml',
    settings: {
      foreground: green_300
    }
  },

  /**
   * Properties
   */
  {
    name: 'Property name',
    scope: 'entity.name.tag.yaml',
    settings: {
      foreground: pink_300
    }
  }
];

export default ymlColors;
