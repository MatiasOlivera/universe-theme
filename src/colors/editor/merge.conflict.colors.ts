import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

// Merge conflict decorations are shown when the editor contains special diff
// ranges.
const mergeConflictColors: UIColors = (palette) => {
  const { gray, green, deepPurple, background, cyan, blue } = palette;

  const headerOpacity: string = opacity_50;
  const contentOpacity: string = opacity_50;

  return {
    editorOverviewRuler: {
      // Common ancestor overview ruler foreground for inline merge conflicts.
      commonContentForeground: gray[1],

      // Current overview ruler foreground for inline merge conflicts.
      currentContentForeground: green[1],

      // Incoming overview ruler foreground for inline merge conflicts.
      incomingContentForeground: deepPurple[1]
    },

    merge: {
      // Current header background in inline merge conflicts. The color must not
      // be opaque so as not to hide underlying decorations.
      currentHeaderBackground: `${cyan[9]}${headerOpacity}`,

      // Current content background in inline merge conflicts. The color must
      // not be opaque so as not to hide underlying decorations.
      currentContentBackground: `${cyan[7]}${contentOpacity}`,

      // Incoming header background in inline merge conflicts. The color must
      // not be opaque so as not to hide underlying decorations.
      incomingHeaderBackground: `${blue[9]}${headerOpacity}`,

      //  Incoming content background in inline merge conflicts. The color must
      // not be opaque so as not to hide underlying decorations.
      incomingContentBackground: `${blue[7]}${contentOpacity}`,

      // Common ancestor header background in inline merge-conflicts. The color
      // must not be opaque so as not to hide underlying decorations.
      commonHeaderBackground: `${gray[7]}${headerOpacity}`,

      // Common ancestor content background in inline merge-conflicts. The color
      // must not be opaque so as not to hide underlying decorations.
      commonContentBackground: `${gray[9]}${contentOpacity}`,

      // Border color on headers and the splitter in inline merge conflicts.
      border: background[6]
    }
  };
};

export default mergeConflictColors;
