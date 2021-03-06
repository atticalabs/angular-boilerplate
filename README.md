# AngularBoilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Custom Webpack

This project uses @angular-builders/custom-webpack to make use of a custom postcss configuration.

Dependencies for webpack:

- [postcss-purgecss](https://github.com/FullHuman/purgecss)
- [postcss-import](https://github.com/postcss/postcss-import)
- [tailwindcss](https://github.com/tailwindcss/tailwindcss)
- [autoprefixer](https://github.com/postcss/autoprefixer)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run with Server Side Rendering

Use `npm run ssr` to _build and run the project_ with SSR. Server with run in http://localhost:4000

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Unit test are using Jest instead of the default runner Karma. Jest is faster and it doesn't require to open a browser to run the tests, which makes the process of running many unit tests a lot faster. 

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Run `npm run` cypress to execute end-to-end tests via [Cypress](https://cypress.io/)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
