import { UIColors } from '../../types/colors-types';

const tabColors: UIColors = (palette) => {
  const { background, yellow, gray } = palette;

  return {
    editorPane: {
      background: background[5]
    },
    tab: {
      activeBackground: background[5],
      activeBorderTop: yellow[3],
      activeForeground: gray[0],
      border: background[7],
      inactiveBackground: background[6],
      inactiveForeground: gray[1],
      unfocusedActiveBorderTop: yellow[4],
      unfocusedActiveForeground: gray[1],
      unfocusedInactiveForeground: gray[1]
    }
  };
};

export default tabColors;
