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
    },

    {
      name: 'YAML: Constant',
      scope: ['constant.language.boolean.yaml', 'constant.language.null.yaml'],
      settings: tokens.yaml.constant
    }
  ];
};

export default ymlColors;
