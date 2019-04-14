import { SyntaxColors } from '../../types/colors-types';

const jsonColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Scalars
     */
    {
      name: 'Boolean', // type.special
      scope: 'constant.language.json',
      settings: tokens.json.boolean
    },
    {
      name: 'Number', // type.number
      scope: 'constant.numeric.json',
      settings: tokens.json.number
    },
    {
      name: 'String', // type.string
      scope: 'string.quoted.double.json',
      settings: tokens.type.string
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
