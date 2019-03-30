import { TokenColors } from '../../types/colors-types';
import { attributeColor, componentColor, directiveColor, tagColor, textColor } from './html.colors';

const jsxColors: TokenColors = [
  {
    name: 'JSX: Tag angle brackets',
    scope: 'punctuation.definition.tag.jsx',
    settings: {
      foreground: tagColor
    }
  },
  {
    name: 'JSX: Component tag',
    scope: [
      'support.class.component.open.jsx',
      'support.class.component.close.jsx',
      'support.class.component.tsx'
    ],
    settings: {
      foreground: componentColor
    }
  },
  {
    name: 'JSX: Attribute',
    scope: 'entity.other.attribute-name.jsx',
    settings: {
      // Pink is used in variables and method arguments
      foreground: attributeColor
    }
  },
  {
    name: 'JSX: Text',
    scope: ['JSXNested', 'meta.jsx.children.tsx'],
    settings: {
      foreground: textColor
    }
  },
  {
    name: 'JSX: Expression punctuation',
    scope: [
      'punctuation.section.embedded.begin.jsx',
      'punctuation.section.embedded.end.jsx',
      'punctuation.section.embedded.begin.tsx',
      'punctuation.section.embedded.end.tsx'
    ],
    settings: {
      foreground: directiveColor
    }
  },
  {
    name: 'JSX: Punctuation',
    scope: ['meta.brace.curly.js', 'meta.brace.round.js'],
    settings: {
      foreground: textColor
    }
  }
];

export default jsxColors;
