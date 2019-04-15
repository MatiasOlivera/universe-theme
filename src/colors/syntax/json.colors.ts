import { SyntaxColors } from '../../types/colors-types';

const jsonColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Scalars
     */
    {
      name: 'Language constant (boolean, null)',
      scope: 'constant.language.json',
      settings: tokens.type.constant.languageAlt
    },

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
