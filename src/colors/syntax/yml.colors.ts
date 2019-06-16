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

    {
      name: 'YAML: Directive puntuaction',
      scope: 'punctuation.definition.directive.begin.yaml',
      settings: tokens.yaml.directive.puntuaction
    },

    {
      name: 'YAML: Anchor name',
      scope: ['entity.name.type.anchor.yaml', 'variable.other.alias.yaml'],
      settings: tokens.yaml.anchor.name
    },
    {
      name: 'YAML: Anchor puntuaction',
      scope: [
        'punctuation.definition.anchor.yaml',
        'punctuation.definition.alias.yaml'
      ],
      settings: tokens.yaml.anchor.puntuaction
    },

    {
      name: 'YAML: Sequence item punctuation',
      scope: 'punctuation.definition.block.sequence.item.yaml',
      settings: tokens.yaml.sequence.puntuaction
    },

    {
      name: 'YAML: Merge key',
      scope: 'constant.language.merge.yaml',
      settings: tokens.keyword.operator
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
