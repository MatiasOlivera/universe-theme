import { ColorPalettes, SyntaxColors } from '../../types/colors-types';

interface HtmlTokens {
  tagColor: string;
  componentColor: string;
  textColor: string;
  attributeColor: string;
  directiveColor: string;
}

export const htmlTokens = (palette: ColorPalettes): HtmlTokens => {
  const { purple, orange, blueGray, indigo } = palette;

  return {
    tagColor: purple[2],
    componentColor: orange[2],
    textColor: blueGray[0],
    attributeColor: indigo[2],
    directiveColor: orange[2]
  };
};

const htmlColors: SyntaxColors = (palette) => {
  const { pink } = palette;
  const {
    attributeColor,
    componentColor,
    directiveColor,
    tagColor,
    textColor
  } = htmlTokens(palette);

  return [
    {
      name: 'Tag',
      scope: 'entity.name.tag',
      settings: {
        foreground: tagColor
      }
    },
    {
      name: 'Tag angle brackets',
      scope: [
        'punctuation.definition.tag.begin',
        'punctuation.definition.tag.end'
      ],
      settings: {
        foreground: tagColor
      }
    },
    {
      name: 'Attribute',
      scope: ['meta.tag', 'meta.tag.inline.any'],
      settings: {
        foreground: attributeColor
      }
    },
    {
      name: 'Text',
      scope: 'text.html.derivative',
      settings: {
        foreground: textColor
      }
    },
    {
      name: 'Special character',
      scope: 'constant.character.entity',
      settings: {
        foreground: pink[2]
      }
    },

    /**
     * Components
     */
    {
      name: 'Component tag',
      scope: 'entity.name.tag.other',
      settings: {
        foreground: componentColor
      }
    },
    {
      name: 'Component directives',
      scope: [
        'punctuation.definition.generic.begin.html',
        'punctuation.definition.generic.end.html',
        'meta.attribute.unrecognized'
      ],
      settings: {
        foreground: directiveColor
      }
    }
  ];
};

export default htmlColors;
