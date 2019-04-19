import { UIColors } from '../../types/colors-types';

// Colors for list and trees like the File Explorer. An active list/tree has
// keyboard focus, an inactive does not.
const listColors: UIColors = (palette) => {
  const { deepPurple, red, yellow } = palette;

  return {
    list: {
      // List/Tree background color for the selected item when the list/tree is
      // active.
      activeSelectionBackground: deepPurple[6],

      // List/Tree foreground color for the selected item when the list/tree is
      // active.
      activeSelectionForeground: deepPurple[0],

      // List/Tree drag and drop background when moving items around using the
      // mouse.
      dropBackground: deepPurple[9],

      // List/Tree background color for the focused item when the list/tree is
      // active.
      focusBackground: deepPurple[6],

      // List/Tree foreground color for the focused item when the list/tree is
      // active. An active list/tree has keyboard focus, an inactive does not.
      focusForeground: deepPurple[0],

      // List/Tree foreground color of the match highlights when searching
      // inside the list/tree.
      highlightForeground: deepPurple[0],

      // List/Tree background when hovering over items using the mouse.
      hoverBackground: deepPurple[5],

      // List/Tree foreground when hovering over items using the mouse.
      hoverForeground: deepPurple[0],

      // List/Tree background color for the selected item when the list/tree is
      // inactive.
      inactiveSelectionBackground: deepPurple[5],

      // List/Tree foreground color for the selected item when the list/tree is
      // inactive. An active list/tree has keyboard focus, an inactive does not.
      inactiveSelectionForeground: deepPurple[0],

      // List background color for the focused item when the list is inactive.
      // An active list has keyboard focus, an inactive does not. Currently
      // only supported in lists.
      inactiveFocusBackground: deepPurple[5],

      // List/Tree foreground color for invalid items, for example an unresolved
      // root in explorer.
      invalidItemForeground: deepPurple[9],

      // Foreground color of list items containing errors.
      errorForeground: red[1],

      // Foreground color of list items containing warnings.
      warningForeground: yellow[1]
    },
    listFilterWidget: {
      // List/Tree Filter background color of typed text when searching inside
      // the list/tree.
      background: deepPurple[6],

      // List/Tree Filter Widget's outline color of typed text when searching
      // inside the list/tree.
      outline: deepPurple[5],

      // List/Tree Filter Widget's outline color when no match is found of typed
      // text when searching inside the list/tree.
      noMatchesOutline: red[5]
    }
  };
};

export default listColors;
