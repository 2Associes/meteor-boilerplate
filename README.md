# Meteor Boilerplate

[![CircleCI Build Status](https://circleci.com/gh/2Associes/meteor-boilerplate/tree/master.svg?style=shield&circle-token=d1f1cfc9181d3bf9a8a408745dd56a617d36dafd)](https://circleci.com/gh/2Associes/meteor-boilerplate)

A boilerplate for Meteor projects using Sass, Font Awesome and Bootstrap 4.

![](screenshot.png)

## Getting started

### Prerequisites

* [Node.js][2] >= v12.14.0
* [npm][4] >= 6.13.7

```
node -v && npm -v
```

We recommand using [Node Version Manager][3] but [Yarn][5] can also be used.

```
nvm install v12.14.0
nvm use v12.14.0
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
5. Run [Chimp][1] acceptance tests once or in `@watch` mode :

  ```
  meteor npm run test
  ```
  ```
  meteor npm run test-watch
  ```
6. When you're ready to start, you should clean up the Database, otherwise you're going to have the project collections and data within you're project :

  ```
  meteor reset
  ```


### Collections

This project make uses of [digilord:faker][6] to generate data to Paragraphs Collection (the 3 lorem ipsum paragraphs you see on the demo app). You can change this behavious by editing `/imports/startup/server/fixtures.js`

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
│   │   │   ├── users
│   │   ├── modules
│   │   │   ├── form
│   │   ├── startup
│   │   │   ├── client
│   │   │   ├── server
│   │   ├── ui
│   │   │   ├── components
│   │   │   ├── layouts
│   │   │   ├── pages
│   │   │   │   ├── admin
│   │   │   │   ├── features
│   │   │   │   │   ├── examples
│   ├── private
|   │   ├── emails
│   ├── public
|   │   ├── favicons
|   │   ├── images
|   │   ├── offline
│   ├── server
│   ├── tests
│   │   ├── step-definitions
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
