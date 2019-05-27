import { SyntaxColors } from '../../types/colors-types';

const vueColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'Vue directive',
      scope: 'meta.directive.vue entity.other.attribute-name.html',
      settings: tokens.html.directive
    }
  ];
};

export default vueColors;
