import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../palette/opacity';

const overviewRulerColors: UIColors = (palette) => {
  const { green, background, purple, red, blue, yellow } = palette;

  return {
    editorOverviewRuler: {
      addedForeground: green[1],
      border: background[6],
      bracketMatchForeground: purple[1],
      deletedForeground: red[1],
      errorForeground: red[1],
      findMatchForeground: `${purple[1]}${opacity_50}`,
      infoForeground: blue[1],
      modifiedForeground: blue[1],
      rangeHighlightForeground: `${purple[1]}${opacity_50}`,
      selectionHighlightForeground: `${purple[1]}${opacity_50}`,
      warningForeground: yellow[1],
      wordHighlightForeground: `${purple[1]}${opacity_50}`,
      wordHighlightStrongForeground: `${purple[1]}${opacity_50}`
    }
  };
};

export default overviewRulerColors;
