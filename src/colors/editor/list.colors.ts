import { UIColors } from '../../types/colors-types';

const listColors: UIColors = (palette) => {
  const { deepPurple, red, yellow } = palette;

  return {
    list: {
      activeSelectionBackground: deepPurple[6],
      activeSelectionForeground: deepPurple[0],
      dropBackground: deepPurple[9],
      focusBackground: deepPurple[6],
      focusForeground: deepPurple[0],
      highlightForeground: deepPurple[0],
      hoverBackground: deepPurple[5],
      hoverForeground: deepPurple[0],
      inactiveSelectionBackground: deepPurple[5],
      inactiveSelectionForeground: deepPurple[0],
      inactiveFocusBackground: deepPurple[5],
      invalidItemForeground: deepPurple[9],
      errorForeground: red[1],
      warningForeground: yellow[1]
    },
    listFilterWidget: {
      background: deepPurple[6],
      outline: deepPurple[5],
      noMatchesOutline: red[5]
    }
  };
};

export default listColors;
