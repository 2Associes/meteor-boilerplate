# Meteor Boilerplate

[![CircleCI Build Status](https://circleci.com/gh/2Associes/meteor-boilerplate/tree/master.svg?style=shield&circle-token=d1f1cfc9181d3bf9a8a408745dd56a617d36dafd)](https://circleci.com/gh/2Associes/meteor-boilerplate)

A boilerplate for Meteor projects using Sass, Font Awesome and Bootstrap 4.

![](screenshot.png)

## Getting started

### Prerequisites

* [Node.js][2] >= v12.22.5
* [npm][4] >= 6.14.14

```
node -v && npm -v
```

We recommand using [Node Version Manager][3] but [Yarn][5] can also be used.

```
nvm install v12.22.5
nvm use v12.22.5
```

### Installation

1. Clone this repo to `<yourapp>` :  

    ```
    git clone https://github.com/2associes/meteor-boilerplate.git <yourapp>
    ```

2. Change directory to `<yourapp>` and remove `.git` :  

    ```
    cd <yourapp> && rm -rf .git
    ```
3. Install npm packages :

    ```
    meteor npm install
    ```
4. Start `meteor` :  

    ```
    meteor npm run dev
    ```

## Running tests

1. Validate that you are running the latest Chromedriver:

    ```
    npm install chromedriver@latest --save-dev
    ```

2. Start local server for tests:

    ```
    npm run test
    ```
3. Execute all tests:

    ```
    npm run wdio-test
    ```
4. Execute and watch an individual test:

    ```
    npm run wdio-watch tests/my-test.js
    ```

## Collections

This project make uses of [digilord:faker][6] to generate data to Paragraphs Collection (the 3 lorem ipsum paragraphs you see on the demo app). You can change this behaviour by editing `/imports/startup/server/fixtures.js`

## Stylesheets

You can find stylesheets in the `client/stylesheets` folder. The structure mostly follows Hugo Giraudel's *7 to 1 pattern* documented in their [Sass Guidelines](https://sass-guidelin.es/#the-7-1-pattern).

### Components, pages and layouts

Instead of keeping `components`, `pages`, and `layouts` folders inside `stylesheets` we are importing them from their javascript component folder.

Note that a `components` folder could be added for css only components.

### `vendors` vs `vendors-extensions`

The `vendors` folder is meant for vendors import and configuration and the `vendors-extensions` folder is meant for selector overrides. This means you can add classes there that are meant to redefine the properties of vendors classes.

For example, in `vendors/bootstrap` we are managing which bootstrap modules are imported. While in `vendors-extensions/bootstrap` we are adding a modifier to bootstrap's `.contrainer` class.

## Directory Structure

```
├── meteor-boilerplate/
│   ├── .meteor
│   ├── client
│   │   ├── compatibility
│   │   ├── stylesheets
│   │   │   ├── abstracts
│   │   │   ├── base
│   │   │   ├── extends
│   │   │   ├── vendors
│   │   │   ├── vendors-extensions
│   ├── i18n
│   │   ├── en
│   │   ├── fr
│   ├── imports
│   │   ├── api
│   │   │   ├── paragraphs
│   │   │   │   ├── server
│   │   │   │   │   ├── publications
│   │   │   │   ├── methods
│   │   │   │   ├── model
│   │   │   ├── users
│   │   │   ├── schemas
│   │   ├── modules
│   │   │   ├── validation
│   │   │   ├── head
│   │   ├── startup
│   │   │   ├── client
│   │   │   ├── server
│   │   ├── ui
│   │   │   ├── components
│   │   │   ├── layouts
│   │   │   ├── pages
│   │   │   │   ├── admin
│   │   ├── utils
│   │   │   ├── client
│   │   │   ├── server
│   ├── private
│   │   ├── emails
│   ├── public
│   │   ├── favicons
│   │   ├── images
│   │   ├── offline
│   ├── server
│   ├── tests
│   │   ├── utils
```

## Included Packages

This project uses many packages. In order to see the entire list of packages, you can run `meteor list` in your terminal.

## Authors

* **Hugues Brunelle** - *Lead Front-end Developer* - [2 Associés](https://github.com/2Associes)
* **Andrés Flores** - *Front-end Developer* - [andresfloresdev](https://github.com/andresfloresdev)
* **Nicolas Harnois** - *Internationalization and localization* - [2 Associés](https://github.com/2Associes)
* **Simon Martineau** - *Front-end Developer* - [marsimeau](https://github.com/marsimeau)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

[1]:https://chimp.readme.io
[2]:https://nodejs.org
[3]:https://github.com/creationix/nvm
[4]:https://www.npmjs.com
[5]:https://yarnpkg.com/en/
[6]:https://atmospherejs.com/digilord/faker
