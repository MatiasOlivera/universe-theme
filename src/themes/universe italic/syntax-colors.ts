import { Css, Html, Javascript, Keyword, Settings, Tokens, Type } from '../../types/tokens-types';
import { comment, css, html, javascript, keyword, tokens, type } from '../universe/syntax-colors';

/**
 * Data types
 */
const italicType: Type = {
  ...type,
  typeName: {
    ...type.typeName,
    fontStyle: 'italic'
  }
};

/**
 * Keywords
 */
const italicKeyword: Keyword = {
  ...keyword,
  default: {
    ...keyword.default,
    fontStyle: 'italic'
  },
  control: {
    ...keyword.control,
    fontStyle: 'italic'
  },
  modifier: {
    ...keyword.modifier,
    fontStyle: 'italic'
  },
  operator: {
    ...keyword.operator,
    fontStyle: ''
  },
  other: {
    ...keyword.other,
    fontStyle: 'italic'
  }
};

/**
 * Comments
 */
const italicComment: Settings = {
  ...comment,
  fontStyle: 'italic'
};

/**
 * CSS
 */
const italicCss: Css = {
  ...css,
  // Selectors
  pseudoClass: italicKeyword.modifier,
  pseudoElement: italicKeyword.modifier,

  unit: {
    ...css.unit,
    fontStyle: ''
  }
};

/**
 * HTML
 */
export const italicHtml: Html = {
  ...html,
  directive: {
    ...html.directive,
    fontStyle: 'italic'
  }
};

/**
 * Javascript
 */
const italicJavascript: Javascript = {
  ...javascript,
  arrowFunction: {
    fontStyle: ''
  }
};

export let italicTokens: Tokens = {
  ...tokens,
  type: italicType,
  keyword: italicKeyword,
  css: italicCss,
  html: italicHtml,
  comment: italicComment,
  javascript: italicJavascript
};
