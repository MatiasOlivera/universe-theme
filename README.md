<div align="center">
  <img alt="icon" src="https://github.com/MatiasOlivera/universe-theme/blob/develop/static/icon.png?raw=true"/>

  # Universe theme

  A dark theme for passionate developers. Made in planet earth

  [![Version](https://vsmarketplacebadge.apphb.com/version/MatiasOlivera.universe.svg?subject=Version&style=for-the-badge&labelColor=241236&color=4E3766)](https://marketplace.visualstudio.com/items?itemName=MatiasOlivera.universe)
  [![Installs](https://vsmarketplacebadge.apphb.com/installs/MatiasOlivera.universe.svg?subject=Installs&style=for-the-badge&labelColor=241236&color=4E3766)](https://marketplace.visualstudio.com/items?itemName=MatiasOlivera.universe)
  [![Rating](https://vsmarketplacebadge.apphb.com/rating-star/MatiasOlivera.universe.svg?subject=Rating&style=for-the-badge&labelColor=241236&color=4E3766)](https://marketplace.visualstudio.com/items?itemName=MatiasOlivera.universe#review-details)
  ![Licence](https://img.shields.io/github/license/MatiasOlivera/universe-theme.svg?subject=Licence&style=for-the-badge&labelColor=241236&color=4E3766)

  ![Theme preview](https://github.com/MatiasOlivera/universe-theme/blob/master/static/images/preview.png?raw=true)

  [![Download](https://img.shields.io/static/v1.svg?label=Download&message=VS%20Code&style=for-the-badge&labelColor=241236&color=4E3766)](https://marketplace.visualstudio.com/items?itemName=MatiasOlivera.universe)
</div>

---

**This theme was crafted with the accessibility in mind**, for all and especially those with visual impairment. It achieves the accessibility standards outlined in the WCAG 2.0, specifically the ones related to the text contrast ratio.

**Why is it important to me?** Well, you probably **read source code during long periods of time** and you should not force yourself to read some text with poor contrast.
Even if you don't have visual impairments, **there are other factors that could affect the text readability, like direct sunlight, dark rooms**, etc. so it will help you anyway.

If you want to learn more, check this [guide](https://usecontrast.com/guide)

---

## 🚀 Installation

1. Open **Extensions** sidebar panel in VS Code. `View → Extensions`
2. Search for **Universe** theme published by MatiasOlivera
3. Click **Install** to install it.
4. Select **Universe** in the quick picker (or click on **Set color theme**)
5. Happy coding!

## ☄️ Support

| Description  | Extensions          | Support |
|--------------|---------------------|---------|
| Config files | .ini, .editorconfig | ✅       |
| CSS          | .css                | ✅       |
| GraphQL      | .gql, .graphql      | ✅       |
| HTML         | .html               | ✅       |
| Javascript   | .js                 | ✅       |
| JSON         | .json               | ✅       |
| Markdown     | .md                 | ✅       |
| Pug          | .pug                | ✅       |
| React (JSX)  | .jsx                | ✅       |
| Typescript   | .ts                 | ✅       |
| Vue          | .vue                | ✅       |
| YAML         | .yml                | ✅       |

If you want support for another `language` / `library` / `framework`, please open an issue and let me know

## 🌠 Screenshots

### Frontend

#### HTML
![HTML](https://github.com/MatiasOlivera/universe-theme/blob/develop/static/screenshots/frontend/html.png?raw=true)

#### CSS
![CSS](https://github.com/MatiasOlivera/universe-theme/blob/develop/static/screenshots/frontend/css.png?raw=true)

#### Javascript
![Javascript](https://github.com/MatiasOlivera/universe-theme/blob/develop/static/screenshots/frontend/javascript.png?raw=true)

#### Angular
![Angular HTML](https://github.com/MatiasOlivera/universe-theme/blob/develop/static/screenshots/frontend/angular-html.png?raw=true)
![Angular Javascript](https://github.com/MatiasOlivera/universe-theme/blob/develop/static/screenshots/frontend/angular-js.png?raw=true)

#### React
![React](https://github.com/MatiasOlivera/universe-theme/blob/develop/static/screenshots/frontend/react.png?raw=true)

#### Vue
![Vue](https://github.com/MatiasOlivera/universe-theme/blob/develop/static/screenshots/frontend/vue.png?raw=true)

### Backend

#### Node.js
![Node.js](https://github.com/MatiasOlivera/universe-theme/blob/develop/static/screenshots/backend/node.png?raw=true)

#### PHP
![PHP](https://github.com/MatiasOlivera/universe-theme/blob/develop/static/screenshots/backend/php.png?raw=true)

## ✨ Color reference

The syntax highlight palette was inspired by **Tailwind v1 colors**.

## 🌌 FAQ
*Frequently Asked Questions.*

#### Which font is used in the preview image?
It's [Iosevka](https://typeof.net/Iosevka/)

#### What are the recommended editor settings?

```json
"workbench.colorTheme": "Universe",
"editor.fontFamily": "Iosevka",
"editor.fontWeight": "500",
"window.titleBarStyle": "custom",
"editor.scrollBeyondLastLine": false,
```

#### What are the recommended settings to use with Bracket Pair Colorizer?

```json
"bracket-pair-colorizer-2.colors": ["#ecc94b", "#4fd1c5", "#f687b3"],
"bracket-pair-colorizer-2.forceUniqueOpeningColor": true,
"bracket-pair-colorizer-2.forceIterationColorCycle": true,
"bracket-pair-colorizer-2.highlightActiveScope": true,
"editor.matchBrackets": false,
"bracket-pair-colorizer-2.activeScopeCSS": ["opacity: 0"],
"bracket-pair-colorizer-2.showBracketsInGutter": false,
"bracket-pair-colorizer-2.showBracketsInRuler": false,
"bracket-pair-colorizer-2.showVerticalScopeLine": true,
"bracket-pair-colorizer-2.showHorizontalScopeLine": false,
"bracket-pair-colorizer-2.scopeLineCSS": [
  "borderStyle : solid",
  "borderWidth : 2px",
  "borderColor : {color}",
  "opacity: 0.5"
],
```

> [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) is an extension that hightlight matching brackets

## 👩‍🚀 Contributing

### With feedback

Please open an issue in this repository. Or you just can talk to me on Twitter: @_matiasolivera

### With code

- Fork the repository
- Open the repo in VS Code
- Run the command `npm install` to install the dev dependencies
- Press `F5` to open a new window with this theme loaded.
- Open `File > Preferences > Color Themes` and pick Universe.
- Open a file that has a language associated. The languages' configured grammar will tokenize the text and assign 'scopes' to the tokens. To examine these scopes, invoke the `Inspect TM Scopes` command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
- Add the token and his color to an existing or new Typescript file
- Run `npm run ts:watch` to compile the Typescript files
- Run `npm run node:watch` to launch a watcher and generate the JSON theme definition on every change

> Changes to the theme file are automatically applied to the Extension Development Host window.
