import { TokenColors } from '../../types/colors-types';
import { orange_200 } from '../palette/orange.colors';
import { pink_200 } from '../palette/pink.colors';
import { purple_300 } from '../palette/purple.colors';
import { gray_100 } from '../palette/gray.colors';
import { yellow_200 } from '../palette/yellow.colors';

export const tagColor: string = purple_300;
export const componentColor: string = orange_200;
export const textColor: string = gray_100;
export const directiveColor: string = yellow_200;

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
    scope: ['meta.tag', 'meta.tag.inline.any'],
    settings: {
      foreground: pink_200
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
    scope: 'constant.character.entity',
    settings: {
      foreground: pink_200
    }
  },

  /**
   * Components
   */
  {
    name: 'Component tag',
    scope: 'entity.name.tag.other',
    settings: {
      foreground: componentColor
    }
  },
  {
    name: 'Component directives',
    scope: [
      'punctuation.definition.generic.begin.html',
      'punctuation.definition.generic.end.html',
      'meta.attribute.unrecognized'
    ],
    settings: {
      foreground: directiveColor
    }
  }
];

export default htmlColors;
