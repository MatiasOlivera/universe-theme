import { UIColors } from '../../types/colors-types';

const editorGroupColors: UIColors = (palette) => {
  const { background, purple } = palette;

  return {
    editorGroup: {
      border: background[6],
      dropBackground: purple[8],
      emptyBackground: background[5],
      focusedEmptyBorder: purple[3]
    },
    editorGroupHeader: {
      noTabsBackground: background[5],
      tabsBackground: background[6],
      tabsBorder: background[5]
    }
  };
};

export default editorGroupColors;
