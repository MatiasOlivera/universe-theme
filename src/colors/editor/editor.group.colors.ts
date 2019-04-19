import { UIColors } from '../../types/colors-types';

const editorGroupColors: UIColors = (palette) => {
  const { background, deepPurple } = palette;

  return {
    editorGroup: {
      border: background[6],
      dropBackground: deepPurple[9],
      emptyBackground: background[5],
      focusedEmptyBorder: deepPurple[3]
    },
    editorGroupHeader: {
      noTabsBackground: background[5],
      tabsBackground: background[6],
      tabsBorder: background[5]
    }
  };
};

export default editorGroupColors;
