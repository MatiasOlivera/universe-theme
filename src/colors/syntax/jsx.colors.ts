import { SyntaxColors } from '../../types/colors-types';

const jsxColors: SyntaxColors = (tokens) => {
  return [
    {
      name: 'JSX: Attribute',
      scope: 'entity.other.attribute-name',
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
      scope: ['meta.jsx.children.js', 'JSXNested', 'meta.jsx.children.tsx'],
      settings: tokens.text
    }
  ];
};

export default jsxColors;
