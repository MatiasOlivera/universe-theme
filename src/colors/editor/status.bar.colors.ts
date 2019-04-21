import { UIColors } from '../../types/colors-types';

// The Status Bar is shown in the bottom of the workbench.
const statusBarColors: UIColors = (palette) => {
  const { background, blueGray, deepPurple } = palette;

  return {
    statusBar: {
      // Status Bar background color.
      background: background[7],

      // Status Bar border color separating the Status Bar and editor.
      border: background[8],

      // Status Bar foreground color.
      foreground: blueGray[3],

      // Status Bar background color when a program is being debugged.
      debuggingBackground: background[7],

      // Status Bar border color separating the Status Bar and editor when a
      // program is being debugged.
      debuggingBorder: background[8],

      // Status Bar foreground color when a program is being debugged.
      debuggingForeground: blueGray[3],

      // Status Bar background color when no folder is opened.
      noFolderBackground: background[7],

      // Status Bar border color separating the Status Bar and editor when no
      // folder is opened.
      noFolderBorder: background[8],

      // Status Bar foreground color when no folder is opened.
      noFolderForeground: blueGray[3]
    },

    statusBarItem: {
      // Status Bar item background color when clicking.
      activeBackground: deepPurple[9],

      // Status Bar item background color when hovering.
      hoverBackground: deepPurple[7],

      hostBackground: deepPurple[9],

      // Status Bar prominent items background color. Prominent items stand out
      // from other Status Bar entries to indicate importance. Change mode
      // Toggle Tab Key Moves Focus from command palette to see an example.
      prominentBackground: deepPurple[9],

      // Status Bar prominent items background color when hovering. Prominent
      // items stand out from other Status Bar entries to indicate importance.
      // Change mode Toggle Tab Key Moves Focus from command palette to see an
      // example.
      prominentHoverBackground: deepPurple[7]
    }
  };
};
export default statusBarColors;
