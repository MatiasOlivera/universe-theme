import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../palette/opacity';

const mergeConflictColors: UIColors = (palette) => {
  const { gray, green, purple, background, teal, blue } = palette;

  const headerOpacity: string = opacity_50;
  const contentOpacity: string = opacity_50;

  return {
    editorOverviewRuler: {
      commonContentForeground: gray[1],
      currentContentForeground: green[1],
      incomingContentForeground: purple[1]
    },
    merge: {
      border: background[6],
      commonContentBackground: `${gray[8]}${contentOpacity}`,
      commonHeaderBackground: `${gray[7]}${headerOpacity}`,
      currentContentBackground: `${teal[7]}${contentOpacity}`,
      currentHeaderBackground: `${teal[8]}${headerOpacity}`,
      incomingContentBackground: `${blue[7]}${contentOpacity}`,
      incomingHeaderBackground: `${blue[8]}${headerOpacity}`
    }
  };
};

export default mergeConflictColors;
