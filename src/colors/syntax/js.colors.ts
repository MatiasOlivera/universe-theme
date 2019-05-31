import { SyntaxColors } from '../../types/colors-types';

const jsColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'Object property',
      scope: 'string.unquoted.js',
      settings: tokens.object.property
    },
    {
      name: 'Arrow function. =>',
      scope: 'storage.type.function.arrow.js',
      settings: tokens.javascript.arrowFunction
    },
    {
      name: 'Other operators',
      scope: [
        'keyword.operator.new.js',
        'keyword.operator.in.js',
        'keyword.operator.of.js',
        'keyword.operator.typeof.js'
      ],
      settings: tokens.keyword.other
    }
  ];
};

export default jsColors;
