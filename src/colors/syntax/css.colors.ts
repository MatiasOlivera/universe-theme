import { ColorPalettes, SyntaxColors } from '../../types/colors-types';

interface CssTokens {
  idColor: string;
  classColor: string;
}

export const cssTokens = (palette: ColorPalettes): CssTokens => {
  const { yellow, orange } = palette;

  return {
    idColor: yellow[2],
    classColor: orange[2]
  };
};

const cssColors: SyntaxColors = (palette) => {
  const { pink, purple, teal, green } = palette;
  const { idColor, classColor } = cssTokens(palette);

  return [
    /**
     * Selectors
     */
    {
      name: 'Tag',
      scope: ['entity.name.tag.css', 'meta.selector.css'],
      settings: {
        foreground: pink[2]
      }
    },
    {
      name: 'ID',
      scope: 'entity.other.attribute-name.id.css',
      settings: {
        foreground: idColor
      }
    },
    {
      name: 'Class',
      scope: 'entity.other.attribute-name.class.css',
      settings: {
        foreground: classColor
      }
    },
    {
      name: 'Attribute name',
      scope: 'entity.other.attribute-name.css',
      settings: {
        foreground: purple[2]
      }
    },
    {
      name: 'Pseudo-class',
      scope: 'entity.other.attribute-name.pseudo-class.css',
      settings: {
        foreground: teal[2]
      }
    },
    {
      name: 'Pseudo-element',
      scope: 'entity.other.attribute-name.pseudo-element.css',
      settings: {
        foreground: teal[2]
      }
    },

    /**
     * Properties
     */
    {
      name: 'Property name',
      scope: 'support.type.property-name.css',
      settings: {
        foreground: purple[2]
      }
    },
    {
      name: 'Vendor property name',
      scope: 'support.type.vendored.property-name.css',
      settings: {
        foreground: purple[2]
      }
    },

    /**
     * Values
     */
    {
      name: 'Property value',
      scope: 'meta.property-value.css',
      settings: {
        foreground: green[2]
      }
    },
    {
      name: 'Function parameter',
      scope: ['variable.parameter.css', 'variable.parameter.url.css'],
      settings: {
        foreground: green[2]
      }
    },
    {
      name: 'Number',
      scope: 'constant.numeric.css',
      settings: {
        foreground: green[2]
      }
    },
    {
      name: 'Unit',
      scope: 'keyword.other.unit',
      settings: {
        foreground: purple[2]
      }
    }
  ];
};

export default cssColors;
