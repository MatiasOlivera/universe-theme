// See docs/syntax-highlight.md

// Data types
export interface Type {
  number: Settings; // constant.numeric
  string: Settings; // string
  character: {
    default: Settings; // constant.character
    escape: Settings; // constant.character.escape
  };
  constant: {
    language: Settings; // constant.language
    library: Settings; // support.constant
  };
  custom: Settings; // entity.name.type
  other: Settings; // constant.other
  typeName: Settings; // storage.type
  library: Settings; // support.type
}

// Keywords
export interface Keyword {
  default: Settings;
  control: Settings;
  operator: Settings;
  modifier: Settings; // storage.modifier
  other: Settings; // non arithmetics operators
}

// Variables
export interface Variable {
  default: Settings;
  other: Settings;
}

// Objects
export interface ObjectType {
  property: Settings;
  intermediateProperty: Settings;
}

// Functions
export interface FunctionType {
  name: Settings; // entity.name.function
  parameter: Settings; // variable.parameter
  library: Settings; // support.function
}

// Classes
export interface ClassType {
  name: Settings;
  baseClass: Settings; // entity.other.inherited-class
  library: Settings; // support.class
}

// Enums
export interface EnumType {
  member: Settings;
}

// Modules
export interface ModuleType {
  name: Settings;
  path: Settings;
}

// Sections
export interface Section {
  name: Settings; // entity.name.section
}

// Tags
export interface Tag {
  name: Settings; // entity.name.tag
  attribute: Settings; // entity.other.attribute-name
  value: Settings;
}

// Markup
export interface Markup {
  link: Settings; // markup.underline.link

  // Text
  heading: Settings;
  bold: Settings;
  italic: Settings;
  underline: Settings;
  list: {
    numbered: Settings;
    unnumbered: Settings;
  };
  quote: Settings;
  raw: Settings;
  other: Settings;
}

// Punctuation
export interface Punctuation {
  default: Settings;
}

// Invalid
export interface Invalid {
  illegal: Settings;
  deprecated: Settings;
}

// Config files
export interface Config {
  groupTitle: Settings;
  key: Settings;
  value: Settings;
}

// CSS
export interface Css {
  // Selectors
  tag: Settings;
  id: Settings;
  class: Settings;
  attribute: {
    name: Settings;
  };
  pseudoClass: Settings;
  pseudoElement: Settings;

  // Properties
  property: {
    name: Settings;
    value: Settings;
  };

  function: {
    parameter: Settings;
  };

  number: Settings;
  unit: Settings;
}

// GraphQL
export interface GraphQL {
  alias: Settings;
}

// HTML
export interface Html {
  tag: {
    name: Settings;
    attribute: Settings;
    value: Settings;
  };
  component: Settings;
  directive: Settings;
}

// Javascript
export interface Javascript {
  arrowFunction: Settings;
}

// JSON
export interface Json {
  property: Settings;
}

// Markdown
export interface Markdown {
  link: {
    title: Settings;
  };
}

// SQL
export interface Sql {
  keyword: Settings;
}

// YAML
export interface Yaml {
  document: Settings;
  anchor: {
    name: Settings;
  };
  constant: Settings;
}

export interface Tokens {
  type: Type;
  keyword: Keyword;
  variable: Variable;
  object: ObjectType;
  function: FunctionType;
  class: ClassType;
  enum: EnumType;
  module: ModuleType;
  section: Section;
  text: Settings;
  tag: Tag;
  markup: Markup;
  punctuation: Punctuation;
  invalid: Invalid;
  comment: Settings;
  config: Config;
  css: Css;
  graphql: GraphQL;
  html: Html;
  javascript: Javascript;
  json: Json;
  markdown: Markdown;
  sql: Sql;
  yaml: Yaml;
}

export interface Settings {
  foreground?: string;
  fontStyle?: 'normal' | 'italic' | 'bold' | 'underline' | '';
}
