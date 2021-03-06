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
@import "~@learnersguild/styles/src/base";
```

### Using Materialize Mod

If you're using [Materialize](http://materializecss.com/), add custom colors with the `src/materialize-mod.scss` .

```scss
@import "~@learnersguild/styles/src/materialize-mod";
// Import Materialize SASS afterwards
```

Make sure that you also add Materialize's dependencies (e.g. Google fonts and JS files). See their [Getting Started guide](http://materializecss.com/getting-started.html) for info.

## Development

SCSS source files are in `src/`. Compiled CSS is built into `dist/`.

Use `npm run build` to compile files in `src/` to `dist/`.
