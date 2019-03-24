import { TokenColors } from '../../types/colors-types';
import { green_300 } from '../palette/green.colors';
import { indigo_300 } from '../palette/indigo.colors';
import { purple_300 } from '../palette/purple.colors';

const jsonColors: TokenColors = [
  /**
   * Scalars
   */
  {
    name: 'Boolean',
    scope: 'constant.language.json',
    settings: {
      foreground: indigo_300
    }
  },
  {
    name: 'Number',
    scope: 'constant.numeric.json',
    settings: {
      foreground: indigo_300
    }
  },
  {
    name: 'String',
    scope: 'string.quoted.double.json',
    settings: {
      foreground: green_300
    }
  },

  /**
   * Properties
   */
  {
    name: 'Property name',
    scope: 'support.type.property-name.json',
    settings: {
      foreground: purple_300
    }
  }
];

export default jsonColors;
