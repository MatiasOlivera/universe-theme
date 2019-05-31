import { SyntaxColors } from '../../types/colors-types';

const htmlColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'Attribute',
      scope: ['meta.tag', 'meta.tag.inline.any'],
      settings: tokens.tag.attribute
    },
    {
      name: 'Value',
      scope: 'string.quoted.double.html',
      settings: tokens.tag.value
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
      scope: 'entity.name.tag.other.html',
      settings: tokens.html.component.tag
    },
    {
      name: "Component tag's punctuation",
      scope: [
        'meta.tag.other.html punctuation.definition.tag.begin.html',
        'meta.tag.other.html punctuation.definition.tag.end.html'
      ],
      settings: tokens.html.component.punctuation
    },
    {
      name: 'Component directives',
      scope: 'meta.attribute.unrecognized',
      settings: tokens.html.directive
    },
    {
      name: 'Embedded expression punctuation. {{var}}',
      scope: [
        'punctuation.definition.generic.begin.html',
        'punctuation.definition.generic.end.html'
      ],
      settings: tokens.html.expressionPunctuation
    }
  ];
};

export default htmlColors;
