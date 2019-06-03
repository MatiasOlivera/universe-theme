# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

## [Unreleased]

### Syntax highlight

#### GraphQL

##### Added

- Use custom type color in fragments' name
- Use the variable's color in alias
- Use custom type color when defining a custom scalar

##### Fixed

- Use object property color in types and interfaces' fields
- Use object property color in selection set fields
- Use comment's color in descriptions

#### Javascript

##### Fixed

- Use italic in other operators (`in`, `of`, `typeof`)
- Use pink in language variables (`console` and `window`)
- Use yellow in classes' name
- Use deep purple in template expression punctuation (`${ data }`)

#### React

##### Fixed

- Use white in tag's text
- Use orange in expression punctuation (`{ data }`)
- Use orange in component tag (`<MyComponent/>`)

#### Pug

##### Fixed

- Use gray in comments
- Use HTML tags' color in doctype
- Use green in the path when including a file
- Use deep purple in string interpolation punctuation

## [1.4.0] 2019-05-30

### Syntax highlight

#### Added

- Add italic variants: *Universe Italic* and *Universe Purple Italic*. [#41](https://github.com/MatiasOlivera/universe-theme/pull/41)

#### Changed

- New logo: It's more minimalist and uses simple shapes. [#40](https://github.com/MatiasOlivera/universe-theme/pull/40)

#### Fixed

##### Typescript
- Use constant color (teal) in JSON object. [#41](https://github.com/MatiasOlivera/universe-theme/pull/41)

## [1.3.0] 2019-05-16

### Common

> _Changes that affect user interface and syntax highlight_

#### Removed

- Delete indigo and light blue palette: both are similar to blue
- Delete gray palette: there is already a palette with neutral colors
- Delete light green palette: It's similar to green

### Syntax highlight

#### Changed

- Use teal for language constants and other constants
- Use cyan in native types
- Use blue in special characters

##### CSS

- Use HTML tag color (cyan) in the tag selector
- Use HTML attribute color (blue) in attribute selector
- Use object property color (green) in the property name
- Use blue in property value
- Use modifier color (deep purple) in pseudo classes and pseudo elements
- Use orange in numbers and units

##### HTML

- Use cyan in HTML tags
- Use red color in directives. Eg. Vue and Angular directives
- Use same color in tag punctuation

##### YAML

- Use deep purple in constants

#### Fixed

- Make comments have less contrast
- Use yellow in classes names: use a color that differentiates them from functions and methods
- Use green in object properties

### UI

#### Changed

- Update the neutral color to use background hue. It's used in activity bar icons and text
- Make activity bar icon's foreground darker
- Use saturated color in error text
- Use saturated colors for file status when using Git
- Use a lighter background in input validation
- Use saturated color in text status within lists
- Use secondary color in Settings' modified indicator
- Use saturated colors in squiggles
- Use lighter white text color in the terminal

#### Fixed

- Update colors: the previous palette had both desaturated colors (most of them) and very saturated colors (yellow and orange)
- Use same foreground swatch in git colors
- Use a transparent background in diff editor: It makes reading the code easier
- Use primary color in border of activated options in input fields: It has much more contrast
- Make title bar text and sidebar text lighter: It has more contrast

## [1.2.0] 2019-04-22

### Added

- Add a deep purple variant. You can select it going to `Settings > Color theme > Universe purple`.
- Add the main colors and their usage in the color reference in the README. [#2](https://github.com/MatiasOlivera/universe-theme/issues/2)

### Changed

- Changed the background hue to deep blue.
- Use defined colors for an element in all languages: green for `strings` or orange for `numbers`.
- Update bracket pair colorizer settings.

### Fixed

- Use the primary or secondary color instead of purple to highlight interface components.
- Many small changes to maintain consistency in the user interface.

## [1.1.0] 2019-04-08

### Changed

- New syntax colors: the new palette is more consistent. Now it's using Material Design colors. The most important changes are that purple is more saturated and green is less saturated. [#26](https://github.com/MatiasOlivera/universe-theme/pull/26)

### Fixed

- Differentiate the text using grayscale, according to their importance. [#27](https://github.com/MatiasOlivera/universe-theme/pull/27)

## [1.0.1] 2019-04-03

### Fixed

- Colorize punctuation from interpolated strings: it was difficult to differentiate an expression within a string. [#16](https://github.com/MatiasOlivera/universe-theme/pull/16)
- Make the scrollbar semi-transparent: scrollbar markers weren't visible when covered by the scrollbar. [#18](https://github.com/MatiasOlivera/universe-theme/pull/18)
- Use dialog colors in debug toolbar. [#19](https://github.com/MatiasOlivera/universe-theme/pull/19)
- Use input colors in dropdowns in the Integrated Terminal and the Output panel. [#20](https://github.com/MatiasOlivera/universe-theme/pull/20)

## [1.0.0] 2019-04-01

### Changed

#### UI

- Use a new color palette for the background: the new colors are more accessible. [#6](https://github.com/MatiasOlivera/universe-theme/pull/6)
- Use green and red as `diff` colors: it makes easy to see the changes in files. [#1](https://github.com/MatiasOlivera/universe-theme/issues/1)
- Use a darker background in the peek view header and results
- Use gray colors in indent guides and rulers
- Minor changes

#### Common colors

- Use blue for functions and classes

#### HTML

- Use indigo in `HTML` attributes: pink is already used in JSX variables

### Fixed

- Use indigo in object keys: the object keys must have different colors than their values to make it easier to distinguish them. Before teal was too similar to the green used in `strings`
- Use different colors for each type: now `strings` are green, `numbers` are orange, `constants` like booleans or `null` are purple, primitives and custom types like `interfaces` are teal.
- Add transparency to some UI components to avoid cover others: if the color is solid you can't see what it is behind it. [#11](https://github.com/MatiasOlivera/universe-theme/issues/11)

## [0.0.2] 2019-03-25

### Added

- Theme preview to README.md

## [0.0.1] 2019-03-25

### Added

- Initial editor colors
- Initial syntax highlight colors
- Support for `CSS`, `GraphQL`, `HTML`, `JS`, `JSON`, `Markdown`, `Pug`, `JSX`, `TS`, `Vue` and `YAML`
