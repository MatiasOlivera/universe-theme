import { SyntaxColors } from '../../types/colors-types';

const jsxColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'JSX: Tag angle brackets',
      scope: 'punctuation.definition.tag.jsx',
      settings: tokens.html.tag
    },
    {
      name: 'JSX: Component tag',
      scope: [
        'support.class.component.open.jsx',
        'support.class.component.close.jsx',
        'support.class.component.tsx'
      ],
      settings: tokens.html.component.tag
    },
    {
      name: 'JSX: Attribute',
      scope: 'entity.other.attribute-name.jsx',
      // Pink is used in variables and method arguments
      settings: tokens.html.attribute
    },
    {
      name: 'JSX: Text',
      scope: ['JSXNested', 'meta.jsx.children.tsx'],
      settings: tokens.text
    },
    {
      name: 'JSX: Expression punctuation',
      scope: [
        'punctuation.section.embedded.begin.jsx',
        'punctuation.section.embedded.end.jsx',
        'punctuation.section.embedded.begin.tsx',
        'punctuation.section.embedded.end.tsx'
      ],
      settings: tokens.html.directive
    },
    {
      name: 'JSX: Punctuation',
      scope: ['meta.brace.curly.js', 'meta.brace.round.js'],
      settings: tokens.text
    }
  ];
};

export default jsxColors;
