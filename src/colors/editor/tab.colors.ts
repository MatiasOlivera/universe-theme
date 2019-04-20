import { UIColors } from '../../types/colors-types';

// A Tab is the container of an editor. Multiple Tabs can be opened in one
// editor group.
const tabColors: UIColors = (palette) => {
  const { background, yellow, blueGray } = palette;

  return {
    editorPane: {
      // Background color of the editor pane visible on the left and right side
      // of the centered editor layout.
      background: background[5]
    },

    tab: {
      // Active Tab background color.
      activeBackground: background[5],

      // Inactive Tab background color.
      inactiveBackground: background[6],

      // Border to separate Tabs from each other.
      border: background[7],

      // Tab background color when hovering,
      hoverBackground: '',

      // Tab background color in an unfocused group when hovering
      unfocusedHoverBackground: '',

      // Border to highlight tabs when hovering
      hoverBorder: '',

      // Border to highlight tabs in an unfocused group when hovering
      unfocusedHoverBorder: '',

      //  Border on the top of modified (dirty) active tabs in an active group.
      activeModifiedBorder: '',

      // Border on the top of modified (dirty) inactive tabs in an active group.
      inactiveModifiedBorder: '',

      // Border on the top of modified (dirty) active tabs in an unfocused
      // group.
      unfocusedActiveModifiedBorder: '',

      // Border on the top of modified (dirty) inactive tabs in an unfocused
      // group.
      unfocusedInactiveModifiedBorder: '',

      // Top border for the active tab.
      activeBorderTop: yellow[3],

      // Top border for the active tab in an inactive editor group
      unfocusedActiveBorderTop: yellow[4],

      // Active Tab foreground color in an active group.
      activeForeground: blueGray[0],

      // Active tab foreground color in an inactive editor group.
      unfocusedActiveForeground: blueGray[1],

      // Inactive Tab foreground color in an active group
      inactiveForeground: blueGray[2],

      // Inactive tab foreground color in an inactive editor group
      unfocusedInactiveForeground: blueGray[3]
    }
  };
};

export default tabColors;
