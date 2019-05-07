import { UIColors } from '../../types/colors-types';

// Colors for list and trees like the File Explorer. An active list/tree has
// keyboard focus, an inactive does not.
const listColors: UIColors = (palette) => {
  const { background, secondary, neutral, red, yellow } = palette;

  return {
    list: {
      // List/Tree background color for the selected item when the list/tree is
      // active.
      activeSelectionBackground: background[2],

      // List/Tree foreground color for the selected item when the list/tree is
      // active.
      activeSelectionForeground: neutral[1],

      // List/Tree drag and drop background when moving items around using the
      // mouse.
      dropBackground: background[7],

      // List/Tree background color for the focused item when the list/tree is
      // active.
      focusBackground: background[4],

      // List/Tree foreground color for the focused item when the list/tree is
      // active. An active list/tree has keyboard focus, an inactive does not.
      focusForeground: neutral[2],

      // List/Tree foreground color of the match highlights when searching
      // inside the list/tree.
      highlightForeground: secondary[3],

      // List/Tree background when hovering over items using the mouse.
      hoverBackground: background[4],

      // List/Tree foreground when hovering over items using the mouse.
      hoverForeground: neutral[2],

      // List/Tree background color for the selected item when the list/tree is
      // inactive.
      inactiveSelectionBackground: background[3],

      // List/Tree foreground color for the selected item when the list/tree is
      // inactive. An active list/tree has keyboard focus, an inactive does not.
      inactiveSelectionForeground: neutral[2],

      // List background color for the focused item when the list is inactive.
      // An active list has keyboard focus, an inactive does not. Currently
      // only supported in lists.
      inactiveFocusBackground: background[5],

      // List/Tree foreground color for invalid items, for example an unresolved
      // root in explorer.
      invalidItemForeground: red[2],

      // Foreground color of list items containing errors.
      errorForeground: red[2],

      // Foreground color of list items containing warnings.
      warningForeground: yellow[2]
    },

    listFilterWidget: {
      // List/Tree Filter background color of typed text when searching inside
      // the list/tree.
      background: background[2],

      // List/Tree Filter Widget's outline color of typed text when searching
      // inside the list/tree.
      outline: background[1],

      // List/Tree Filter Widget's outline color when no match is found of typed
      // text when searching inside the list/tree.
      noMatchesOutline: red[3]
    }
  };
};

export default listColors;
