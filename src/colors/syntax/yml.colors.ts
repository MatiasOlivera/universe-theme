import { SyntaxColors } from '../../types/colors-types';

const ymlColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'YAML: Document',
      scope: [
        'entity.other.document.begin.yaml',
        'entity.other.document.end.yaml'
      ],
      settings: tokens.yaml.document
    },

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
    },

    {
      name: 'Other operators',
      scope: [
        'keyword.control.flow.block-scalar.literal.yaml',
        'keyword.control.flow.block-scalar.folded.yaml'
      ],
      settings: tokens.keyword.operator
    }
  ];
};

export default ymlColors;
