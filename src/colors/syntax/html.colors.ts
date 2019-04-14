import { SyntaxColors } from '../../types/colors-types';

const htmlColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'Tag',
      scope: 'entity.name.tag',
      settings: tokens.html.tag
    },
    {
      name: 'Tag angle brackets',
      scope: [
        'punctuation.definition.tag.begin',
        'punctuation.definition.tag.end'
      ],
      settings: tokens.html.tag
    },
    {
      name: 'Attribute',
      scope: ['meta.tag', 'meta.tag.inline.any'],
      settings: tokens.html.attribute
    },
    {
      name: 'Text',
      scope: 'text.html.derivative',
      settings: tokens.text
    },

    /**
     * Components
     */
    {
      name: 'Component tag',
      scope: 'entity.name.tag.other',
      settings: tokens.html.component.tag
    },
    {
      name: 'Component directives',
      scope: [
        'punctuation.definition.generic.begin.html',
        'punctuation.definition.generic.end.html',
        'meta.attribute.unrecognized'
      ],
      settings: tokens.html.directive
    }
  ];
};

export default htmlColors;
