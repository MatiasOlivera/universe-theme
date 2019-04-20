import { UIColors } from '../../types/colors-types';
import { opacity_80 } from '../opacity';

// Editor Groups are the containers of editors. There can be many editor groups.
const editorGroupColors: UIColors = (palette) => {
  const { background } = palette;

  return {
    editorGroup: {
      // Color to separate multiple editor groups from each other.
      border: background[6],

      // Background color when dragging editors around.
      dropBackground: `${background[6]}${opacity_80}`,

      // Background color of an empty editor group.
      emptyBackground: background[5],

      // Border color of an empty editor group that is focused.
      focusedEmptyBorder: background[3]
    },

    editorGroupHeader: {
      // Background color of the editor group title header when Tabs are
      // disabled (set "workbench.editor.showTabs": false).
      noTabsBackground: background[5],

      // Background color of the Tabs container.
      tabsBackground: background[6],

      // Border color of the editor group title header when tabs are enabled.
      tabsBorder: background[5]
    }
  };
};

export default editorGroupColors;
