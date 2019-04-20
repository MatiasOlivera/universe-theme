import { UIColors } from '../../types/colors-types';

// A Tab is the container of an editor. Multiple Tabs can be opened in one
// editor group.
const tabColors: UIColors = (palette) => {
  const { background, blueGray } = palette;

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
      hoverBackground: background[4],

      // Tab background color in an unfocused group when hovering
      unfocusedHoverBackground: background[4],

      // Border to highlight tabs when hovering
      hoverBorder: background[3],

      // Border to highlight tabs in an unfocused group when hovering
      unfocusedHoverBorder: background[3],

      //  Border on the top of modified (dirty) active tabs in an active group.
      activeModifiedBorder: background[3],

      // Border on the top of modified (dirty) inactive tabs in an active group.
      inactiveModifiedBorder: background[4],

      // Border on the top of modified (dirty) active tabs in an unfocused
      // group.
      unfocusedActiveModifiedBorder: background[4],

      // Border on the top of modified (dirty) inactive tabs in an unfocused
      // group.
      unfocusedInactiveModifiedBorder: background[5],

      // Top border for the active tab.
      activeBorderTop: background[0],

      // Top border for the active tab in an inactive editor group
      unfocusedActiveBorderTop: background[2],

      // Active Tab foreground color in an active group.
      activeForeground: blueGray[1],

      // Active tab foreground color in an inactive editor group.
      unfocusedActiveForeground: blueGray[2],

      // Inactive Tab foreground color in an active group
      inactiveForeground: blueGray[3],

      // Inactive tab foreground color in an inactive editor group
      unfocusedInactiveForeground: blueGray[4]
    }
  };
};

export default tabColors;
