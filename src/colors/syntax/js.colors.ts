import { SyntaxColors } from '../../types/colors-types';

const jsColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'Object property',
      scope: 'string.unquoted.js',
      settings: tokens.object.property
    }
  ];
};

export default jsColors;
