import { TokenColors } from '../../types/colors-types';
import { directiveColor } from './html.colors';

const vueColors: TokenColors = [
  {
    name: 'Vue directive',
    scope: 'meta.directive.vue',
    settings: {
      foreground: directiveColor
    }
  }
];

export default vueColors;
