import { TokenColors } from '../../types/colors-types';
import { cyan_2 } from '../palette/cyan.colors';
import { green_2 } from '../palette/green.colors';
import { pink_2 } from '../palette/pink.colors';
import { red_2 } from '../palette/red.colors';
import { slate_2 } from '../palette/slate.colors';
import { violet_2 } from '../palette/violet.colors';

const commonColors: TokenColors = [
  {
    name: 'Comment',
    scope: ['comment'],
    settings: {
      foreground: slate_2,
      fontStyle: 'italic'
    }
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: red_2
    }
  },
  {
    name: 'Keywords',
    scope: ['keyword', 'storage.type', 'storage.modifier'],
    settings: {
      foreground: violet_2
    }
  },
  {
    name: 'String quoted',
    scope: ['string.quoted'],
    settings: {
      foreground: green_2
    }
  },
  {
    name: 'String unquoted',
    scope: ['string.unquoted'],
    settings: {
      foreground: cyan_2
    }
  },
  {
    name: 'Variables',
    scope: ['variable'],
    settings: {
      foreground: pink_2
    }
  }
];

export default commonColors;
