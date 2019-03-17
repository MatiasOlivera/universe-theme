import { TokenColors } from '../../types/colors-types';
import { cyan_2 } from '../palette/cyan.colors';
import { pink_2 } from '../palette/pink.colors';
import { slate_0 } from '../palette/slate.colors';
import { violet_2 } from '../palette/violet.colors';

export const tagColor: string = violet_2;
export const textColor: string = slate_0;

const htmlColors: TokenColors = [
  {
    name: 'Tag',
    scope: 'entity.name.tag',
    settings: {
      foreground: tagColor
    }
  },
  {
    name: 'Tag angle brackets',
    scope: [
      'punctuation.definition.tag.begin',
      'punctuation.definition.tag.end'
    ],
    settings: {
      foreground: tagColor
    }
  },
  {
    name: 'Attribute',
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: pink_2
    }
  },
  {
    name: 'Value',
    scope: ['string.quoted.single', 'string.quoted.double'],
    settings: {
      foreground: cyan_2
    }
  },
  {
    name: 'Text',
    scope: 'text.html.derivative',
    settings: {
      foreground: textColor
    }
  },
  {
    name: 'Special character',
    scope: 'constant.character.entity.numeric.decimal',
    settings: {
      foreground: pink_2
    }
  }
];

export default htmlColors;
