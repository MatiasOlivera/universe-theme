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
     * Keywords
     */
    {
      name: 'JSON object',
      scope: 'support.constant.json',
      settings: tokens.keyword.other
    }
  ];
};

export default tsColors;
