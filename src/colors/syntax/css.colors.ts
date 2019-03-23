import { TokenColors } from '../../types/colors-types';
import { blue_2 } from '../palette/blue.colors';
import { cyan_2 } from '../palette/cyan.colors';
import { green_300 } from '../palette/green.colors';
import { orange_200 } from '../palette/orange.colors';
import { pink_2 } from '../palette/pink.colors';
import { violet_2 } from '../palette/violet.colors';
import { yellow_200 } from '../palette/yellow.colors';

export const idColor: string = yellow_200;
export const classColor: string = orange_200;

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
    scope: 'entity.other.attribute-name.id.css',
    settings: {
      foreground: idColor
    }
  },
  {
    name: 'Class',
    scope: 'entity.other.attribute-name.class.css',
    settings: {
      foreground: classColor
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
      foreground: green_300
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
    name: 'Function parameter',
    scope: 'variable.parameter.css',
    settings: {
      foreground: cyan_2
    }
  }
];

export default cssColors;
