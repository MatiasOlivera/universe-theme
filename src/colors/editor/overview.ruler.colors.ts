import { UIColors } from '../../types/colors-types';
import { opacity_80 } from '../opacity';

// This ruler is located beneath the scroll bar on the right edge of the editor
// and gives an overview of the decorations in the editor.
const overviewRulerColors: UIColors = (palette) => {
  const {
    green,
    background,
    deepPurple,
    cyan,
    pink,
    red,
    blue,
    yellow,
    orange
  } = palette;

  const highlightForeground: string = `${background[0]}${opacity_80}`;

  return {
    editorOverviewRuler: {
      // Color of the overview ruler border.
      border: background[6],

      // Overview ruler marker color for matching brackets.
      bracketMatchForeground: deepPurple[4],

      // Overview ruler marker color for find matches. The color must not be
      // opaque so as not to hide underlying decorations.
      findMatchForeground: highlightForeground,

      // Overview ruler marker color for highlighted ranges, like by the Quick
      // Open, Symbol in File and Find features. The color must not be opaque
      // so as not to hide underlying decorations.
      rangeHighlightForeground: highlightForeground,

      // Overview ruler marker color for selection highlights. The color must
      // not be opaque so as not to hide underlying decorations.
      selectionHighlightForeground: highlightForeground,

      // Overview ruler marker color for symbol highlights. The color must not
      // be opaque so as not to hide underlying decorations.
      wordHighlightForeground: highlightForeground,

      // Overview ruler marker color for write-access symbol highlights. The
      // color must not be opaque so as not to hide underlying decorations.
      wordHighlightStrongForeground: highlightForeground,

      // Overview ruler marker color for added content.
      addedForeground: green[4],

      // Overview ruler marker color for modified content.
      modifiedForeground: blue[4],

      // Overview ruler marker color for infos.
      infoForeground: cyan[4],

      // Overview ruler marker color for warnings.
      warningForeground: yellow[4],

      // Overview ruler marker color for deleted content.
      deletedForeground: orange[4],

      // Overview ruler marker color for errors.
      errorForeground: red[4]
    }
  };
};

export default overviewRulerColors;
