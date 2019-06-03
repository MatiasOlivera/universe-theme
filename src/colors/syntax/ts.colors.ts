import { SyntaxColors } from '../../types/colors-types';

const tsColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Classes
     */
    {
      name: 'Typescript: Class',
      scope: ['new.expr.ts entity.name.type.ts'],
      settings: tokens.class.name
    },

    {
      name: 'Typescript: Language classes',
      scope: ['support.constant.math.ts'],
      settings: tokens.class.library
    },

    /**
     * Interfaces
     */
    {
      name: 'Typescript: Extended interface',
      scope: 'meta.interface.ts entity.other.inherited-class.ts',
      settings: tokens.type.custom
    },

    /**
     * Enums
     */
    {
      name: 'Typescript: Enum member',
      scope: 'variable.other.enummember.ts',
      settings: tokens.enum.member
    },

    {
      name: 'Typescript: Type punctuation',
      scope: [
        'meta.type.tuple.ts meta.brace.square.ts',
        'punctuation.definition.typeparameters.begin.ts',
        'punctuation.definition.typeparameters.end.ts'
      ],
      settings: tokens.type.punctuation
    },

    {
      name: 'Typescript: Template expression punctuation',
      scope: [
        'punctuation.definition.template-expression.begin.ts',
        'punctuation.definition.template-expression.end.ts'
      ],
      settings: tokens.puntuaction.embedded
    },
    {
      name: 'Arrow function. =>',
      scope: 'storage.type.function.arrow.ts',
      settings: tokens.javascript.arrowFunction
    },
    {
      name: 'Other operators',
      scope: [
        'keyword.operator.new.ts',
        'keyword.operator.in.ts',
        'keyword.operator.of.ts',
        'keyword.operator.typeof.ts'
      ],
      settings: tokens.keyword.other
    }
  ];
};

export default tsColors;
