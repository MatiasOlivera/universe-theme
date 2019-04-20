import { ColorPalettes, UIColors } from '../../types/colors-types';
import { opacity_50, opacity_80 } from '../opacity';

interface EditorTokens {
  highlightOpacity: string;
}

export const editorTokens = (palette: ColorPalettes): EditorTokens => {
  return {
    highlightOpacity: opacity_50
  };
};

const editorColors: UIColors = (palette) => {
  const { background, deepPurple, yellow, blueGray } = palette;
  const { highlightOpacity } = editorTokens(palette);

  return {
    editor: {
      // Editor background color.
      background: background[5],

      // Editor default foreground color.
      foreground: blueGray[0],

      // Selection colors are visible when selecting one or more characters.
      // In addition to the selection also all regions with the same content
      // are highlighted.

      // Color of the editor selection.
      selectionBackground: deepPurple[6],

      // Color of the selected text for high contrast.
      selectionForeground: deepPurple[0],

      // Color of the selection in an inactive editor. The color must not be
      // opaque so as not to hide underlying decorations.
      inactiveSelectionBackground: `${deepPurple[7]}${highlightOpacity}`,

      // Color for regions with the same content as the selection. The color
      // must not be opaque so as not to hide underlying decorations.
      selectionHighlightBackground: `${deepPurple[6]}${highlightOpacity}`,

      // Border color for regions with the same content as the selection.
      selectionHighlightBorder: deepPurple[5],

      // Word highlight colors are visible when the cursor is inside a symbol
      // or a word. Depending on the language support available for the file
      // type, all matching references and declarations are highlighted and read
      // and write accesses get different colors. If document symbol language
      // support is not available, this falls back to word highlighting.

      // Background color of a symbol during read-access, for example when
      // reading a variable. The color must not be opaque so as not to hide
      // underlying decorations.
      wordHighlightBackground: `${deepPurple[6]}${highlightOpacity}`,

      // Border color of a symbol during read-access, for example when reading
      // a variable.
      wordHighlightBorder: deepPurple[5],

      // Background color of a symbol during write-access, for example when
      // writing to a variable. The color must not be opaque so as not to hide
      // underlying decorations.
      wordHighlightStrongBackground: `${deepPurple[6]}${highlightOpacity}`,

      // Border color of a symbol during write-access, for example when writing
      // to a variable.
      wordHighlightStrongBorder: deepPurple[5],

      // Find colors depend on the current find string in the Find/Replace
      // dialog.

      // Color of the current search match.
      findMatchBackground: deepPurple[6],

      // Border color of the current search match.
      findMatchBorder: deepPurple[5],

      // Color of the other search matches. The color must not be opaque so as
      // not to hide underlying decorations.
      findMatchHighlightBackground: `${deepPurple[7]}${highlightOpacity}`,

      // Border color of the other search matches.
      findMatchHighlightBorder: deepPurple[5],

      // Color the range limiting the search (Enable 'Find in Selection'
      // in the find widget). The color must not be opaque so as not to hide
      // underlying decorations.
      findRangeHighlightBackground: `${deepPurple[6]}${highlightOpacity}`,

      // Border color the range limiting the search.
      findRangeHighlightBorder: deepPurple[5],

      // The hover highlight is shown behind the symbol for which a hover is
      // shown.

      // Highlight below the word for which a hover is shown. The color must
      // not be opaque so as not to hide underlying decorations.
      hoverHighlightBackground: `${deepPurple[6]}${highlightOpacity}`,

      // The current line is typically shown as either background highlight or
      // a border (not both).

      // Background color for the highlight of line at the cursor position.
      lineHighlightBackground: background[6],

      // The range highlight is visible when selecting a search result.

      // Background color of highlighted ranges, used by Quick Open, Symbol in
      // File and Find features. The color must not be opaque so as not to hide
      // underlying decorations.
      rangeHighlightBackground: `${deepPurple[6]}${highlightOpacity}`,

      // Background color of the border around highlighted ranges.
      rangeHighlightBorder: deepPurple[5]
    },

    editorCursor: {
      // The background color of the editor cursor. Allows customizing the color
      // of a character overlapped by a block cursor.
      background: yellow[9],

      // Color of the editor cursor.
      foreground: yellow[3]
    },

    // Bracket matches
    editorBracketMatch: {
      // Background color behind matching brackets.
      background: deepPurple[6],

      // Color for matching brackets boxes.
      border: deepPurple[6]
    },

    // To see the editor indent guides, set "editor.renderIndentGuides": true.
    editorIndentGuide: {
      // Color of the editor indentation guides.
      background: blueGray[8],

      // Color of the active editor indentation guide.
      activeBackground: blueGray[6]
    },

    // To see editor rulers, define their location with "editor.rulers"
    editorRuler: {
      // Color of the editor rulers.
      foreground: blueGray[8]
    },

    // To see the editor white spaces, enable Toggle Render Whitespace.
    editorWhitespace: {
      // Color of whitespace characters in the editor.
      foreground: blueGray[5]
    },

    editorLineNumber: {
      // Color of editor line numbers.
      foreground: blueGray[5],

      // Color of the active editor line number.
      activeForeground: blueGray[1]
    },

    editorCodeLens: {
      // Foreground color of an editor CodeLens.
      foreground: blueGray[1]
    },

    // Unused source code
    editorUnnecessaryCode: {
      // Opacity of unnecessary (unused) source code in the editor.
      opacity: `${blueGray[0]}${opacity_80}`
    },

    // The link color is visible when clicking on a link.
    editorLink: {
      // Color of active links.
      activeForeground: deepPurple[0]
    }
  };
};

export default editorColors;
