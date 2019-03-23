import { TokenColors } from '../../types/colors-types';
import { blue_300 } from '../palette/blue.colors';
import { pink_2 } from '../palette/pink.colors';
import { violet_2 } from '../palette/violet.colors';

const jsonColors: TokenColors = [
  /**
   * Scalars
   */
  {
    name: 'Boolean',
    scope: 'constant.language.json',
    settings: {
      foreground: violet_2
    }
  },
  {
    name: 'Number',
    scope: 'constant.numeric.json',
    settings: {
      foreground: blue_300
    }
  },

  /**
   * Properties
   */
  {
    name: 'Property name',
    scope: 'support.type.property-name.json',
    settings: {
      foreground: pink_2
    }
  }
];

export default jsonColors;
