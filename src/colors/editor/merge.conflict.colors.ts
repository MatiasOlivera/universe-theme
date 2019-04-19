import { UIColors } from '../../types/colors-types';
import { opacity_50 } from '../opacity';

const mergeConflictColors: UIColors = (palette) => {
  const { gray, green, deepPurple, background, teal, blue } = palette;

  const headerOpacity: string = opacity_50;
  const contentOpacity: string = opacity_50;

  return {
    editorOverviewRuler: {
      commonContentForeground: gray[1],
      currentContentForeground: green[1],
      incomingContentForeground: deepPurple[1]
    },
    merge: {
      border: background[6],
      commonContentBackground: `${gray[9]}${contentOpacity}`,
      commonHeaderBackground: `${gray[7]}${headerOpacity}`,
      currentContentBackground: `${teal[7]}${contentOpacity}`,
      currentHeaderBackground: `${teal[9]}${headerOpacity}`,
      incomingContentBackground: `${blue[7]}${contentOpacity}`,
      incomingHeaderBackground: `${blue[9]}${headerOpacity}`
    }
  };
};

export default mergeConflictColors;
