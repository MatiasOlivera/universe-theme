import { SyntaxColors } from '../../types/colors-types';
import { htmlTokens } from './html.colors';

const vueColors: SyntaxColors = (palette) => {
  const { directiveColor } = htmlTokens(palette);

  return [
    {
      name: 'Vue directive',
      scope: 'meta.directive.vue',
      settings: {
        foreground: directiveColor
      }
    }
  ];
};

export default vueColors;
