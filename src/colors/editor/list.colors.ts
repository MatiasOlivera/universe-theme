import { UIColors } from '../../types/colors-types';

const listColors: UIColors = (palette) => {
  const { purple, red, yellow } = palette;

  return {
    list: {
      activeSelectionBackground: purple[6],
      activeSelectionForeground: purple[0],
      dropBackground: purple[8],
      focusBackground: purple[6],
      focusForeground: purple[0],
      highlightForeground: purple[0],
      hoverBackground: purple[5],
      hoverForeground: purple[0],
      inactiveSelectionBackground: purple[5],
      inactiveSelectionForeground: purple[0],
      inactiveFocusBackground: purple[5],
      invalidItemForeground: purple[8],
      errorForeground: red[1],
      warningForeground: yellow[1]
    },
    listFilterWidget: {
      background: purple[6],
      outline: purple[5],
      noMatchesOutline: red[5]
    }
  };
};

export default listColors;
