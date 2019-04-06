import { SyntaxColors } from '../../types/colors-types';

const ymlColors: SyntaxColors = (palette) => {
  const { indigo, green, purple } = palette;

  return [
    /**
     * Scalars
     */
    {
      name: 'Boolean',
      scope: 'constant.language.boolean.yaml',
      settings: {
        foreground: indigo[2]
      }
    },
    {
      name: 'Number',
      scope: 'constant.numeric.integer.yaml',
      settings: {
        foreground: indigo[2]
      }
    },
    {
      name: 'String',
      scope: 'string.unquoted.plain.out.yaml',
      settings: {
        foreground: green[2]
      }
    },

    /**
     * Properties
     */
    {
      name: 'Property name',
      scope: 'entity.name.tag.yaml',
      settings: {
        foreground: purple[2]
      }
    }
  ];
};

export default ymlColors;
