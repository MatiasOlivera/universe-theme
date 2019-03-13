import { TokenColors } from '../../types/colors-types';
import { cyan_2 } from '../palette/cyan.colors';
import { pink_2 } from '../palette/pink.colors';
import { violet_0, violet_2 } from '../palette/violet.colors';

const htmlColors: TokenColors = [
  {
    name: 'Tag',
    scope: 'entity.name.tag.html',
    settings: {
      foreground: violet_2
    }
  },
  {
    name: 'Tag angle brackets',
    scope: [
      'punctuation.definition.tag.begin.html',
      'punctuation.definition.tag.end.html'
    ],
    settings: {
      foreground: violet_2
    }
  },
  {
    name: 'Attribute',
    scope: 'entity.other.attribute-name.html',
    settings: {
      foreground: pink_2
    }
  },
  {
    name: 'Value',
    scope: ['string.quoted.single.html', 'string.quoted.double.html'],
    settings: {
      foreground: cyan_2
    }
  },
  {
    name: 'Text',
    scope: 'text.html.derivative',
    settings: {
      foreground: violet_0
    }
  },
  {
    name: 'Special character',
    scope: 'constant.character.entity.numeric.decimal.html',
    settings: {
      foreground: pink_2
    }
  }
];

export default htmlColors;
