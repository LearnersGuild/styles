# Learners Guild Styles

Web styling assets for Learners Guild projects.

## Getting Started

### Install with NPM

```shell
$ npm install --save @learnersguild/styles
```

### Import SCSS

Then, in your SASS/SCSS:

```scss
@import "node_modules/@learnersguild/styles/src/base";
```

### Using Materialize Mod

To use the customized [Materialize](http://materializecss.com/) stylesheets, add the following to your SASS/SCSS:

```scss
@import "node_modules/@learnersguild/styles/src/materialize-mod";
```

Make sure that you also add Materialize's dependencies (e.g. Google fonts and JS files). See their [Getting Started guide](http://materializecss.com/getting-started.html) for info.

## Development

SCSS source files are in `src/`. Compiled CSS is built into `dist/`.

Use `npm run build` to compile files in `src/` to `dist/`.
