# Meteor Boilerplate

A boilerplate for Meteor projects using Bootstrap

# Included Packages

- [session](https://atmospherejs.com/meteor/session) : Session variable.
- [iron:router](https://atmospherejs.com/meteor/iron:router) : Routing specifically designed for Meteor.
- [jabbslad:basic-auth](https://atmospherejs.com/meteor/jabbslad:basic-auth) : Add HTTP Basic Auth support to your application.
- [less](https://atmospherejs.com/meteor/less) : Leaner CSS language.
- [mike:mocha](https://atmospherejs.com/meteor/mike:mocha) : Run mocha tests in the browser.
- [nemo64:bootstrap](https://atmospherejs.com/meteor/nemo64:bootstrap) : Highly configurable bootstrap integration.
- [pcel:loading](https://atmospherejs.com/meteor/pcel:loading) : A beautiful loading splash screen (please-wait + spinkit bundle).
- [spiderable](https://atmospherejs.com/meteor/spiderable) : Makes the application crawlable to web spiders.
- [tap:i18n](https://atmospherejs.com/meteor/tap:i18n) : A comprehensive internationalization solution for Meteor.
- [twbs:bootstrap](https://atmospherejs.com/meteor/twbs:bootstrap) : The most popular front-end framework for developing responsive, mobile first projects on the web.

# Installation

1. Clone this repo to `<yourapp>` :  

	`git clone https://github.com/2associes/meteor-boilerplate.git <yourapp>`

2. Remove `.git` :  

	`cd <yourapp> && rm -rf .git`

3. Start `meteor` :  

	`meteor`

# Directory Structure

```
├── meteor-boilerplate/
│   ├── .meteor
│   ├── client
│   │   ├── lib
│   │   ├── templates
│   │   │   ├── 404
│   │   │   │   ├── notFound.html
│   │   │   ├── home
│   │   │   │   ├── index.html
│   │   │   ├── layouts
│   │   │   │   ├── default.html
│   │   │   ├── loading
│   │   │   │   ├── default.html
│   │   │   │   ├── default.js
│   │   │   │   ├── default.less
│   │   │   ├── shared
│   │   │   │   ├── navigations
│   │   │   │   │   ├── main.html
│   │   ├── app.html
│   │   ├── app.js
│   ├── lib
│   │   ├── i18n
│   │   │   ├── fr-CA.i18n.json
│   │   ├── router.js
│   ├── public
│   │   ├── images
│   │   │   ├── meteor-logo.png
│   ├── server
│   │   ├── main.js
│   .gitignore
│   package.json
│   README.md
```

# Bootstrap Less

This project use a [`less`](https://atmospherejs.com/meteor/less) version of [`twbs:bootstrap`](https://atmospherejs.com/meteor/twbs:bootstrap) framework with [`nemo64:bootstrap`](https://atmospherejs.com/meteor/nemo64:bootstrap) integration. 

### `client/lib`

Holds the `custom.bootstrap.json` file where you can configure what part of Bootstrap you want to load into your project.

### `client/stylesheets`

Holds a SMACSS inspired folder structure and the `style.less` file that loads Bootstrap files and the other files you need so you can use `extends` and `mixins` easily in your project.