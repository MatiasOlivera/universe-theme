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
