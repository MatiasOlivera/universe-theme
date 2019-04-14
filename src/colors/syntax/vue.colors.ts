import { SyntaxColors } from '../../types/colors-types';

const vueColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'Vue directive',
      scope: 'meta.directive.vue',
      settings: tokens.html.directive
    }
  ];
};

export default vueColors;
