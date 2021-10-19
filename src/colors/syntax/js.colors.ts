import { SyntaxColors } from '../../types/colors-types';

const jsColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'Object property',
      scope: 'string.unquoted.js',
      settings: tokens.object.property
    },
    {
      name: 'Javascript: Language variables',
      scope: [
        // console
        'support.class.console.js',
        'support.type.object.console.js',

        // browser objects. eg. window
        'support.type.object.dom.js'
      ],
      settings: tokens.variable.other
    },
    {
      name: 'Javascript: Class',
      scope: 'new.expr.js entity.name.type.js',
      settings: tokens.class.name
    },
    {
      name: 'Javascript: Language classes',
      scope: ['support.constant.math.js'],
      settings: tokens.class.library
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
        'keyword.operator.typeof.js',

        // instanceof
        'keyword.operator.expression.instanceof.js',
        'keyword.operator.instanceof.js'
      ],
      settings: tokens.keyword.other
    },
    {
      name: 'Javascript: Punctuation marks',
      scope: 'meta.brace',
      settings: tokens.punctuation.default
    }
  ];
};

export default jsColors;
