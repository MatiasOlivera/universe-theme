import { SyntaxColors } from '../../types/colors-types';

const tsColors: SyntaxColors = (palette) => {
  const { purple } = palette;

  return [
    /**
     * Keywords
     */
    {
      name: 'JSON object',
      scope: 'support.constant.json',
      settings: {
        foreground: purple[2]
      }
    }
  ];
};

export default tsColors;
