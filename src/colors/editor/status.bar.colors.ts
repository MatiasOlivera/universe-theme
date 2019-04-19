import { UIColors } from '../../types/colors-types';

const statusBarColors: UIColors = (palette) => {
  const { background, blueGray, deepPurple } = palette;

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
      activeBackground: deepPurple[9],
      hostBackground: deepPurple[9],
      hoverBackground: deepPurple[7],
      prominentBackground: deepPurple[9],
      prominentHoverBackground: deepPurple[7]
    }
  };
};
export default statusBarColors;
