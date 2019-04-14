import { SyntaxColors } from '../../types/colors-types';

const tsColors: SyntaxColors = (tokens) => {
  return [
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
