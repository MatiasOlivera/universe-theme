import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

// This ruler is located beneath the scroll bar on the right edge of the editor
// and gives an overview of the decorations in the editor.
const overviewRulerColors: UIColors = (palette) => {
  const { green, background, deepPurple, red, blue, yellow } = palette;

  return {
    editorOverviewRuler: {
      // Color of the overview ruler border.
      border: background[6],

      // Overview ruler marker color for matching brackets.
      bracketMatchForeground: deepPurple[1],

      // Overview ruler marker color for find matches. The color must not be
      // opaque so as not to hide underlying decorations.
      findMatchForeground: `${deepPurple[1]}${opacity_50}`,

      // Overview ruler marker color for highlighted ranges, like by the Quick
      // Open, Symbol in File and Find features. The color must not be opaque
      // so as not to hide underlying decorations.
      rangeHighlightForeground: `${deepPurple[1]}${opacity_50}`,

      // Overview ruler marker color for selection highlights. The color must
      // not be opaque so as not to hide underlying decorations.
      selectionHighlightForeground: `${deepPurple[1]}${opacity_50}`,

      // Overview ruler marker color for symbol highlights. The color must not
      // be opaque so as not to hide underlying decorations.
      wordHighlightForeground: `${deepPurple[1]}${opacity_50}`,

      // Overview ruler marker color for write-access symbol highlights. The
      // color must not be opaque so as not to hide underlying decorations.
      wordHighlightStrongForeground: `${deepPurple[1]}${opacity_50}`,

      // Overview ruler marker color for added content.
      addedForeground: green[1],

      // Overview ruler marker color for modified content.
      modifiedForeground: blue[1],

      // Overview ruler marker color for infos.
      infoForeground: blue[1],

      // Overview ruler marker color for warnings.
      warningForeground: yellow[1],

      // Overview ruler marker color for deleted content.
      deletedForeground: red[1],

      // Overview ruler marker color for errors.
      errorForeground: red[1]
    }
  };
};

export default overviewRulerColors;
