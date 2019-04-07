import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

const mergeConflictColors: UIColors = (palette) => {
  const { blueGray, green, purple, background, teal, blue } = palette;

  const headerOpacity: string = opacity_50;
  const contentOpacity: string = opacity_50;

  return {
    editorOverviewRuler: {
      commonContentForeground: blueGray[1],
      currentContentForeground: green[1],
      incomingContentForeground: purple[1]
    },
    merge: {
      border: background[6],
      commonContentBackground: `${blueGray[8]}${contentOpacity}`,
      commonHeaderBackground: `${blueGray[7]}${headerOpacity}`,
      currentContentBackground: `${teal[7]}${contentOpacity}`,
      currentHeaderBackground: `${teal[8]}${headerOpacity}`,
      incomingContentBackground: `${blue[7]}${contentOpacity}`,
      incomingHeaderBackground: `${blue[8]}${headerOpacity}`
    }
  };
};

export default mergeConflictColors;
