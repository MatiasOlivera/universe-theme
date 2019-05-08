import { UIColors } from '../../types/colors-types';

// The Status Bar is shown in the bottom of the workbench.
const statusBarColors: UIColors = (palette) => {
  const { background, blueGray } = palette;

  const backgroundColor: string = background[7];
  const borderColor: string = background[8];
  const foregroundColor: string = blueGray[6];

  return {
    statusBar: {
      // Status Bar background color.
      background: backgroundColor,

      // Status Bar border color separating the Status Bar and editor.
      border: borderColor,

      // Status Bar foreground color.
      foreground: foregroundColor,

      // Status Bar background color when a program is being debugged.
      debuggingBackground: backgroundColor,

      // Status Bar border color separating the Status Bar and editor when a
      // program is being debugged.
      debuggingBorder: borderColor,

      // Status Bar foreground color when a program is being debugged.
      debuggingForeground: foregroundColor,

      // Status Bar background color when no folder is opened.
      noFolderBackground: backgroundColor,

      // Status Bar border color separating the Status Bar and editor when no
      // folder is opened.
      noFolderBorder: borderColor,

      // Status Bar foreground color when no folder is opened.
      noFolderForeground: foregroundColor
    },

    statusBarItem: {
      // Status Bar item background color when clicking.
      activeBackground: background[6],

      // Status Bar item background color when hovering.
      hoverBackground: background[5],

      hostBackground: background[6],

      // Status Bar prominent items background color. Prominent items stand out
      // from other Status Bar entries to indicate importance. Change mode
      // Toggle Tab Key Moves Focus from command palette to see an example.
      prominentBackground: background[8],

      // Status Bar prominent items background color when hovering. Prominent
      // items stand out from other Status Bar entries to indicate importance.
      // Change mode Toggle Tab Key Moves Focus from command palette to see an
      // example.
      prominentHoverBackground: background[5]
    }
  };
};
export default statusBarColors;
