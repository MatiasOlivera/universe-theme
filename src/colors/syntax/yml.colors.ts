import { SyntaxColors } from '../../types/colors-types';

const ymlColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Scalars
     */
    {
      name: 'Boolean', // type.special
      scope: 'constant.language.boolean.yaml',
      settings: tokens.yaml.boolean
    },
    {
      name: 'String', // string
      scope: 'string.unquoted.plain.out.yaml',
      settings: tokens.type.string
    },

    /**
     * Properties
     */
    {
      name: 'Property name', // entity.name.tag
      scope: 'entity.name.tag.yaml',
      settings: tokens.tag.name
    }
  ];
};

export default ymlColors;
