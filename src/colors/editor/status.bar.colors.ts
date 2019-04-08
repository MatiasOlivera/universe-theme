import { UIColors } from '../../types/colors-types';

const statusBarColors: UIColors = (palette) => {
  const { background, blueGray, purple } = palette;

  return {
    statusBar: {
      background: background[7],
      border: background[8],
      debuggingBackground: background[7],
      debuggingBorder: background[8],
      debuggingForeground: blueGray[3],
      foreground: blueGray[3],
      noFolderBackground: background[7],
      noFolderBorder: background[8],
      noFolderForeground: blueGray[3]
    },
    statusBarItem: {
      activeBackground: purple[8],
      hostBackground: purple[8],
      hoverBackground: purple[7],
      prominentBackground: purple[8],
      prominentHoverBackground: purple[7]
    }
  };
};
export default statusBarColors;
