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
        // new
        'keyword.operator.new.js',

        // in
        'keyword.operator.expression.in.js',
        'keyword.operator.in.js',

        // of
        'keyword.operator.expression.of.js',
        'keyword.operator.of.js',

        // typeof
        'keyword.operator.expression.typeof.js',
        'keyword.operator.typeof.js'
      ],
      settings: tokens.keyword.other
    }
  ];
};

export default jsColors;
