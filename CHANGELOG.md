# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

## [Unreleased]

## [1.0.0] 2019-04-01

### Changed

#### UI

- Use a new color palette for the background. The new colors are more accessible. [Pull request #6](https://github.com/MatiasOlivera/universe-theme/pull/6)
- Use green and red as `diff` colors: it makes easy to see the changes in files. [Fixed #1](https://github.com/MatiasOlivera/universe-theme/issues/1)
- Use a darker background in the peek view header and results
- Use gray colors in indent guides and rulers
- Minor changes

#### Common colors

- Use blue for functions and classes

#### HTML

- Use indigo in HTML attributes: pink is already used in JSX variables

### Fixed

- Use indigo in object keys: the object keys must have different colors than their values to make it easier to distinguish them. Before teal was too similar to the green used in `strings`
- Use different colors for each type: now `strings` are green, `numbers` are orange, `constants` like booleans or `null` are purple, primitives and custom types like `interfaces` are teal.
- Add transparency to some UI components to avoid cover others. If the color is solid you can't see what it is behind it. [Fixed #11](https://github.com/MatiasOlivera/universe-theme/issues/11)

## [0.0.2] 2019-03-25

### Added

- Theme preview to README.md

## [0.0.1] 2019-03-25

### Added

- Initial editor colors
- Initial syntax highlight colors
- Support for CSS, GraphQL, HTML, JS, JSON, Markdown, Pug, JSX, TS, Vue and YAML
