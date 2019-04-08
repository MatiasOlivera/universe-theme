# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

## [Unreleased]

## [1.1.0] 2019-04-08

### Changed

- **New syntax colors**: the new palette is more consistent. Now it's using Material Design colors. The most important changes are that purple is more saturated and green is less saturated. [#26](https://github.com/MatiasOlivera/universe-theme/pull/26)

### Fixed

- **Differentiate the text using grayscale**, according to their importance. [#27](https://github.com/MatiasOlivera/universe-theme/pull/27)

## [1.0.1] 2019-04-03

### Fixed

- **Colorize punctuation from interpolated strings**: it was difficult to differentiate an expression within a string. [#16](https://github.com/MatiasOlivera/universe-theme/pull/16)
- **Make the scrollbar semi-transparent**: scrollbar markers weren't visible when covered by the scrollbar. [#18](https://github.com/MatiasOlivera/universe-theme/pull/18)
- **Use dialog colors in debug toolbar.** [#19](https://github.com/MatiasOlivera/universe-theme/pull/19)
- **Use input colors in dropdowns in the Integrated Terminal and the Output panel.** [#20](https://github.com/MatiasOlivera/universe-theme/pull/20)

## [1.0.0] 2019-04-01

### Changed

#### UI

- **Use a new color palette for the background**: the new colors are more accessible. [#6](https://github.com/MatiasOlivera/universe-theme/pull/6)
- **Use green and red as `diff` colors**: it makes easy to see the changes in files. [#1](https://github.com/MatiasOlivera/universe-theme/issues/1)
- **Use a darker background in the peek view header and results**
- **Use gray colors in indent guides and rulers**
- **Minor changes**

#### Common colors

- **Use blue for functions and classes**

#### HTML

- **Use indigo in `HTML` attributes**: pink is already used in JSX variables

### Fixed

- **Use indigo in object keys**: the object keys must have different colors than their values to make it easier to distinguish them. Before teal was too similar to the green used in `strings`
- **Use different colors for each type**: now `strings` are green, `numbers` are orange, `constants` like booleans or `null` are purple, primitives and custom types like `interfaces` are teal.
- **Add transparency to some UI components to avoid cover others**: if the color is solid you can't see what it is behind it. [#11](https://github.com/MatiasOlivera/universe-theme/issues/11)

## [0.0.2] 2019-03-25

### Added

- **Theme preview to README.md**

## [0.0.1] 2019-03-25

### Added

- **Initial editor colors**
- **Initial syntax highlight colors**
- **Support for `CSS`, `GraphQL`, `HTML`, `JS`, `JSON`, `Markdown`, `Pug`, `JSX`, `TS`, `Vue` and `YAML`**
