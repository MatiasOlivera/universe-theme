import { SyntaxColors } from '../../types/colors-types';

const jsonColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Properties
     */
    {
      name: 'Property name',
      scope: 'support.type.property-name.json',
      settings: tokens.json.property
    }
  ];
};

export default jsonColors;
