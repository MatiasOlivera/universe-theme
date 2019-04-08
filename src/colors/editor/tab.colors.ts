import { UIColors } from '../../types/colors-types';

const tabColors: UIColors = (palette) => {
  const { background, yellow, blueGray } = palette;

  return {
    editorPane: {
      background: background[5]
    },
    tab: {
      activeBackground: background[5],
      activeBorderTop: yellow[3],
      activeForeground: blueGray[0],
      border: background[7],
      inactiveBackground: background[6],
      inactiveForeground: blueGray[2],
      unfocusedActiveBorderTop: yellow[4],
      unfocusedActiveForeground: blueGray[1],
      unfocusedInactiveForeground: blueGray[3]
    }
  };
};

export default tabColors;
