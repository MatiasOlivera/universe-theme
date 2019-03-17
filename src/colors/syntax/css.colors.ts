import { TokenColors } from '../../types/colors-types';
import { blue_2 } from '../palette/blue.colors';
import { cyan_2 } from '../palette/cyan.colors';
import { green_2 } from '../palette/green.colors';
import { orange_1 } from '../palette/orange.colors';
import { pink_2 } from '../palette/pink.colors';
import { violet_2 } from '../palette/violet.colors';
import { yellow_1 } from '../palette/yellow.colors';

const cssColors: TokenColors = [
  /**
   * Selectors
   */
  {
    name: 'Tag',
    scope: ['entity.name.tag.css', 'meta.selector.css'],
    settings: {
      foreground: violet_2
    }
  },
  {
    name: 'ID',
    scope: 'entity.other.attribute-name.id',
    settings: {
      foreground: yellow_1
    }
  },
  {
    name: 'Class',
    scope: 'entity.other.attribute-name.class',
    settings: {
      foreground: orange_1
    }
  },
  {
    name: 'Attribute name',
    scope: 'entity.other.attribute-name.css',
    settings: {
      foreground: violet_2
    }
  },
  {
    name: 'Pseudo-class',
    scope: 'entity.other.attribute-name.pseudo-class.css',
    settings: {
      foreground: green_2
    }
  },
  {
    name: 'Pseudo-element',
    scope: 'entity.other.attribute-name.pseudo-element.css',
    settings: {
      foreground: blue_2
    }
  },

  /**
   * Properties
   */
  {
    name: 'Property name',
    scope: 'support.type.property-name.css',
    settings: {
      foreground: pink_2
    }
  },
  {
    name: 'Vendor property name',
    scope: 'support.type.vendored.property-name.css',
    settings: {
      foreground: pink_2
    }
  },

  /**
   * Values
   */
  {
    name: 'Property value',
    scope: 'meta.property-value.css',
    settings: {
      foreground: cyan_2
    }
  },
  {
    name: 'Number',
    scope: 'constant.numeric.css',
    settings: {
      foreground: blue_2
    }
  },
  {
    name: 'Unit',
    scope: 'keyword.other.unit',
    settings: {
      foreground: blue_2
    }
  },
  {
    name: 'Function',
    scope: 'support.function',
    settings: {
      foreground: blue_2
    }
  },
  {
    name: 'Function parameter',
    scope: 'variable.parameter.css',
    settings: {
      foreground: cyan_2
    }
  }
];

export default cssColors;
