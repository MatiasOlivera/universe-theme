# Syntax highlight

## Language Grammars

Language grammars are used to assign names to document elements such as keywords, comments, strings or similar. The purpose of this is to allow styling (syntax highlighting) and to make the text editor “smart” about which context the caret is in.

The language grammar is used only to parse the document and assign names to subsets of this document. Then scope selectors can be used for styling, preferences and deciding how keys and tab triggers should expand.

### Scope name

This should be a unique name for the grammar, following the convention of being a dot-separated name where each new (left-most) part specializes the name. Normally it would be a two-part name where the first is either text or source and the second is the name of the language or document type. But if you are specializing an existing type, you probably want to derive the name from the type you are specializing.

### Naming Conventions

You can assign basically any name you wish to any part of the document that you can markup with the grammar system and then use that name in scope selectors.

**There are however conventions so that one theme can target as many languages as possible, without having dozens of rules specific to each language and also so that functionality can be re-used across languages**.

Here is a list of the 11 root groups which are currently in use with some explanation about their intended purpose. This is presented as a hierarchical list but the actual scope name is obtained by joining the name from each level with a dot. For example double-slash is comment.line.double-slash.

- `comment` — for comments.
  - `line` — line comments, we specialize further so that the type of comment start character(s) can be extracted from the scope.
    - `double-slash` — `// comment`
    - `double-dash` — `-- comment`
    - `number-sign` — `# comment`
    - `percentage` — `% comment`
    - _character_ — other types of line comments.
  - `block` — multi-line comments like `/* … */` and `<!-- … -->`.
    - `documentation` — embedded documentation.
- `constant` — various forms of constants.

  - `numeric` — those which represent numbers, e.g. `42`, `1.3f`, `0x4AB1U`.
  - `character` — those which represent characters, e.g. `&lt;`, `\e`, `\031`.
    - `escape` — escape sequences like `\e` would be `constant.character.escape`.
  - `language` — constants (generally) provided by the language which are “special” like `true`, `false`, `nil`, `YES`, `NO`, etc.
  - `other` — other constants, e.g. colors in CSS.

- `entity` — an entity refers to a larger part of the document, for example a chapter, class, function, or tag. We do not scope the entire entity as `entity.*` (we use `meta.*` for that). But we do use `entity.*` for the “placeholders” in the larger entity, e.g. if the entity is a chapter, we would use `entity.name.section` for the chapter title.

  - `name` — we are naming the larger entity.
    - `function` — the name of a function.
    - `type` — the name of a type declaration or class.
    - `tag` — a tag name.
    - `section` — the name is the name of a section/heading.
  - `other` — other entities.
    - `inherited-class` — the superclass/baseclass name.
    - `attribute-name` — the name of an attribute (mainly in tags).

- `invalid` — stuff which is “invalid”.
  - `illegal` — illegal, e.g. an ampersand or lower-than character in HTML (which is not part of an entity/tag).
  - `deprecated` — for deprecated stuff e.g. using an API function which is deprecated or using styling with strict HTML.
- `keyword` — keywords (when these do not fall into the other groups).
  - `control` — mainly related to flow control like `continue`, `while`, `return`, etc.
  - `operator` — operators can either be textual (e.g. `or`) or be characters.
  - `other` — other keywords.
- `markup` — this is for markup languages and generally applies to larger subsets of the text.
  - `underline` — underlined text.
    - `link` — this is for links, as a convenience this is derived from `markup.underline` so that if there is no theme rule which specifically targets `markup.underline.link` then it will inherit the underline style.
  - `bold` — bold text (text which is strong and similar should preferably be derived from this name).
  - `heading` — a section header. Optionally provide the heading level as the next element, for example `markup.heading.2.html` for `<h2>…</h2>` in HTML.
  - `italic` — italic text (text which is emphasized and similar should preferably be derived from this name).
  - `list` — list items.
    - `numbered` — numbered list items.
    - `unnumbered` — unnumbered list items.
  - `quote` — quoted (sometimes block quoted) text.
  - `raw` — text which is verbatim, e.g. code listings. Normally spell checking is disabled for `markup.raw`.
  - `other` — other markup constructs.
- `meta` — the meta scope is generally used to markup larger parts of the document. For example the entire line which declares a function would be `meta.function` and the subsets would be `storage.type`, `entity.name.function`, `variable.parameter` etc. and only the latter would be styled. Sometimes the meta part of the scope will be used only to limit the more general element that is styled, most of the time meta scopes are however used in scope selectors for activation of bundle items. For example in Objective-C there is a meta scope for the interface declaration of a class and the implementation, allowing the same tab-triggers to expand differently, depending on context.
- `storage` — things relating to “storage”.
  - `type` — the type of something, `class`, `function`, `int`, `var`, etc.
  - `modifier` — a storage modifier like `static`, `final`, `abstract`, etc.
- `string` — strings.
  - `quoted` — quoted strings.
    - `single` — single quoted strings: `'foo'`.
    - `double` — double quoted strings: `"foo"`.
    - `triple` — triple quoted strings: `"""Python"""`.
    - `other` — other types of quoting: `$'shell'`, `%s{...}`.
  - `unquoted` — for things like here-docs and here-strings.
  - `interpolated` — strings which are “evaluated”: `` `date` ``, `$(pwd)`.
  - `regexp` — regular expressions: `/(\w+)/`.
  - `other` — other types of strings (should rarely be used).
- `support` — things provided by a framework or library should be below `support`.
  - `function` — functions provided by the framework/library. For example `NSLog` in Objective-C is `support.function`.
  - `class` — when the framework/library provides classes.
  - `type` — types provided by the framework/library, this is probably only used for languages derived from C, which has `typedef` (and `struct`). Most other languages would introduce new types as classes.
  - `constant` — constants (magic values) provided by the framework/library.
  - `variable` — variables provided by the framework/library. For example `NSApp` in AppKit.
  - `other` — the above should be exhaustive, but for everything else use `support.other`.
- `variable` — variables. Not all languages allow easy identification (and thus markup) of these.
  - `parameter` — when the variable is declared as the parameter.
  - `language` — reserved language variables like `this`, `super`, `self`, etc.
  - `other` — other variables, like `$some_variables`.

## Resources

- [Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
- [Writing a TextMate Grammar: Some Lessons Learned](https://www.apeth.com/nonblog/stories/textmatebundle.html)
- [TextMate Language Grammars](https://macromates.com/manual/en/language_grammars)
- [Introduction to scopes](https://macromates.com/blog/2005/introduction-to-scopes/)
