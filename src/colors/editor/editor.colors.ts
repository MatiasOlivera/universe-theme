import { ColorPalettes, UIColors } from '../../types/colors-types';
import { opacity_70, opacity_80, opacity_90 } from '../opacity';

interface SelectionColors {
  selectionColor: string;
  selectionBackground: string;
  findMatchBackground: string;
  highlightBackground: string;
}

export function selectionTokens(palette: ColorPalettes) {
  const { background } = palette;
  const selectionColor: string = background[0];

  return {
    selectionColor,
    selectionBackground: `${selectionColor}${opacity_80}`,
    findMatchBackground: `${selectionColor}${opacity_90}`,
    highlightBackground: `${selectionColor}${opacity_90}`
  };
}

const editorColors: UIColors = (palette) => {
  const { secondary, background, neutral } = palette;

  const {
    selectionColor,
    findMatchBackground,
    highlightBackground,
    selectionBackground
  } = selectionTokens(palette);

  return {
    editor: {
      // Editor background color.
      background: background[5],

      // Editor default foreground color.
      foreground: neutral[1],

      // Selection colors are visible when selecting one or more characters.
      // In addition to the selection also all regions with the same content
      // are highlighted.

      // Color of the editor selection.
      selectionBackground: selectionBackground,

      // Color of the selected text for high contrast.
      selectionForeground: neutral[0],

      // Color of the selection in an inactive editor. The color must not be
      // opaque so as not to hide underlying decorations.
      inactiveSelectionBackground: `${selectionColor}${opacity_70}`,

      // Color for regions with the same content as the selection. The color
      // must not be opaque so as not to hide underlying decorations.
      selectionHighlightBackground: selectionBackground,

      // Border color for regions with the same content as the selection.
      selectionHighlightBorder: selectionBackground,

      // Word highlight colors are visible when the cursor is inside a symbol
      // or a word. Depending on the language support available for the file
      // type, all matching references and declarations are highlighted and read
      // and write accesses get different colors. If document symbol language
      // support is not available, this falls back to word highlighting.

      // Background color of a symbol during read-access, for example when
      // reading a variable. The color must not be opaque so as not to hide
      // underlying decorations.
      wordHighlightBackground: highlightBackground,

      // Border color of a symbol during read-access, for example when reading
      // a variable.
      wordHighlightBorder: highlightBackground,

      // Background color of a symbol during write-access, for example when
      // writing to a variable. The color must not be opaque so as not to hide
      // underlying decorations.
      wordHighlightStrongBackground: highlightBackground,

      // Border color of a symbol during write-access, for example when writing
      // to a variable.
      wordHighlightStrongBorder: highlightBackground,

      // Find colors depend on the current find string in the Find/Replace
      // dialog.

      // Color of the current search match.
      findMatchBackground: findMatchBackground,

      // Border color of the current search match.
      findMatchBorder: findMatchBackground,

      // Color of the other search matches. The color must not be opaque so as
      // not to hide underlying decorations.
      findMatchHighlightBackground: findMatchBackground,

      // Color the range limiting the search (Enable 'Find in Selection'
      // in the find widget). The color must not be opaque so as not to hide
      // underlying decorations.
      findRangeHighlightBackground: highlightBackground,

      // The hover highlight is shown behind the symbol for which a hover is
      // shown.

      // Highlight below the word for which a hover is shown. The color must
      // not be opaque so as not to hide underlying decorations.
      hoverHighlightBackground: highlightBackground,

      // The current line is typically shown as either background highlight or
      // a border (not both).

      // Background color for the highlight of line at the cursor position.
      lineHighlightBackground: background[4],

      // The range highlight is visible when selecting a search result.

      // Background color of highlighted ranges, used by Quick Open, Symbol in
      // File and Find features. The color must not be opaque so as not to hide
      // underlying decorations.
      rangeHighlightBackground: highlightBackground
    },

    editorCursor: {
      // The background color of the editor cursor. Allows customizing the color
      // of a character overlapped by a block cursor.
      background: secondary[9],

      // Color of the editor cursor.
      foreground: secondary[4]
    },

    // Bracket matches
    editorBracketMatch: {
      // Background color behind matching brackets.
      background: selectionBackground,

      // Color for matching brackets boxes.
      border: selectionBackground
    },

    // To see the editor indent guides, set "editor.renderIndentGuides": true.
    editorIndentGuide: {
      // Color of the editor indentation guides.
      background: background[1],

      // Color of the active editor indentation guide.
      activeBackground: background[0]
    },

    // To see editor rulers, define their location with "editor.rulers"
    editorRuler: {
      // Color of the editor rulers.
      foreground: background[1]
    },

    // To see the editor white spaces, enable Toggle Render Whitespace.
    editorWhitespace: {
      // Color of whitespace characters in the editor.
      foreground: neutral[7]
    },

    editorLineNumber: {
      // Color of editor line numbers.
      foreground: neutral[7],

      // Color of the active editor line number.
      activeForeground: neutral[3]
    },

    editorCodeLens: {
      // Foreground color of an editor CodeLens.
      foreground: neutral[3]
    },

    // Unused source code
    editorUnnecessaryCode: {
      // Opacity of unnecessary (unused) source code in the editor.
      opacity: `${neutral[1]}${opacity_80}`
    },

    // The link color is visible when clicking on a link.
    editorLink: {
      // Color of active links.
      activeForeground: secondary[4]
    }
  };
};

export default editorColors;
