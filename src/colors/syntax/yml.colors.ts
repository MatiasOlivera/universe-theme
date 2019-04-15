import { SyntaxColors } from '../../types/colors-types';

const ymlColors: SyntaxColors = (tokens) => {
  return [
    /**
     * Scalars
     */
    {
      name: 'Language constant (boolean, null)',
      scope: ['constant.language.boolean.yaml', 'constant.language.null.yaml'],
      settings: tokens.type.languageConstant.alternative
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
      name: 'Property name',
      scope: 'entity.name.tag.yaml',
      settings: tokens.tag.name
    }
  ];
};

export default ymlColors;
