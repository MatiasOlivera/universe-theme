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

    /**
     * Enums
     */
    {
      name: 'Typescript: Enum member',
      scope: 'variable.other.enummember.ts',
      settings: tokens.enum.member
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
