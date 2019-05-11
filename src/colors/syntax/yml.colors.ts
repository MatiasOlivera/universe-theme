import { SyntaxColors } from '../../types/colors-types';

const ymlColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Properties
     */
    {
      name: 'Property name',
      scope: 'entity.name.tag.yaml',
      settings: tokens.tag.name
    }
  ];
};

export default ymlColors;
