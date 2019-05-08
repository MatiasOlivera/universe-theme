import { UIColors } from '../../types/colors-types';
import { opacity_0, opacity_10, opacity_20 } from '../opacity';

// Merge conflict decorations are shown when the editor contains special diff
// ranges.
const mergeConflictColors: UIColors = (palette) => {
  const { blue, green, background } = palette;

  const headerOpacity: string = opacity_20;
  const contentOpacity: string = opacity_10;

  return {
    editorOverviewRuler: {
      // Common ancestor overview ruler foreground for inline merge conflicts.
      commonContentForeground: background[0],

      // Current overview ruler foreground for inline merge conflicts.
      currentContentForeground: blue[4],

      // Incoming overview ruler foreground for inline merge conflicts.
      incomingContentForeground: green[4]
    },

    merge: {
      // Current header background in inline merge conflicts. The color must not
      // be opaque so as not to hide underlying decorations.
      currentHeaderBackground: `${blue[4]}${headerOpacity}`,

      // Current content background in inline merge conflicts. The color must
      // not be opaque so as not to hide underlying decorations.
      currentContentBackground: `${blue[4]}${contentOpacity}`,

      // Incoming header background in inline merge conflicts. The color must
      // not be opaque so as not to hide underlying decorations.
      incomingHeaderBackground: `${green[4]}${headerOpacity}`,

      //  Incoming content background in inline merge conflicts. The color must
      // not be opaque so as not to hide underlying decorations.
      incomingContentBackground: `${green[4]}${contentOpacity}`,

      // Common ancestor header background in inline merge-conflicts. The color
      // must not be opaque so as not to hide underlying decorations.
      commonHeaderBackground: `${background[1]}${headerOpacity}`,

      // Common ancestor content background in inline merge-conflicts. The color
      // must not be opaque so as not to hide underlying decorations.
      commonContentBackground: `${background[1]}${contentOpacity}`,

      // Border color on headers and the splitter in inline merge conflicts.
      border: `${background[0]}${opacity_0}`
    }
  };
};

export default mergeConflictColors;
