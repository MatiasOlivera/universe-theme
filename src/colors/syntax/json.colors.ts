import { SyntaxColors } from '../../types/colors-types';

const jsonColors: SyntaxColors = (palette) => {
  const { indigo, green, purple } = palette;

  return [
    /**
     * Scalars
     */
    {
      name: 'Boolean',
      scope: 'constant.language.json',
      settings: {
        foreground: indigo[2]
      }
    },
    {
      name: 'Number',
      scope: 'constant.numeric.json',
      settings: {
        foreground: indigo[2]
      }
    },
    {
      name: 'String',
      scope: 'string.quoted.double.json',
      settings: {
        foreground: green[2]
      }
    },

    /**
     * Properties
     */
    {
      name: 'Property name',
      scope: 'support.type.property-name.json',
      settings: {
        foreground: purple[2]
      }
    }
  ];
};

export default jsonColors;
