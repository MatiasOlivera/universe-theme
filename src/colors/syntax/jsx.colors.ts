import { SyntaxColors } from '../../types/colors-types';

const jsxColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'JSX: Tag angle brackets',
      scope: 'punctuation.definition.tag.jsx',
      settings: tokens.tag.punctuation
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
      scope: [
        'entity.other.attribute-name.js.jsx',
        'entity.other.attribute-name.jsx'
      ],
      // Pink is used in variables and method arguments
      settings: tokens.tag.attribute
    },
    {
      name: 'JSX: Value',
      scope: 'JSXAttrs string.quoted.double.js',
      // Pink is used in variables and method arguments
      settings: tokens.tag.value
    },
    {
      name: 'JSX: Text',
      scope: ['meta.jsx.children.js.jsx', 'JSXNested', 'meta.jsx.children.tsx'],
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
      settings: tokens.html.expressionPunctuation
    },
    {
      name: 'JSX: Punctuation',
      scope: ['meta.brace.curly.js', 'meta.brace.round.js'],
      settings: tokens.text
    }
  ];
};

export default jsxColors;
