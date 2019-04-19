import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

const overviewRulerColors: UIColors = (palette) => {
  const { green, background, deepPurple, red, blue, yellow } = palette;

  return {
    editorOverviewRuler: {
      addedForeground: green[1],
      border: background[6],
      bracketMatchForeground: deepPurple[1],
      deletedForeground: red[1],
      errorForeground: red[1],
      findMatchForeground: `${deepPurple[1]}${opacity_50}`,
      infoForeground: blue[1],
      modifiedForeground: blue[1],
      rangeHighlightForeground: `${deepPurple[1]}${opacity_50}`,
      selectionHighlightForeground: `${deepPurple[1]}${opacity_50}`,
      warningForeground: yellow[1],
      wordHighlightForeground: `${deepPurple[1]}${opacity_50}`,
      wordHighlightStrongForeground: `${deepPurple[1]}${opacity_50}`
    }
  };
};

export default overviewRulerColors;
