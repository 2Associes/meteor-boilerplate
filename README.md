# Meteor Boilerplate

A boilerplate for Meteor projects using Bootstrap

# Included Packages

- [session](https://atmospherejs.com/meteor/session) : Session variable.
- [iron:router](https://atmospherejs.com/meteor/iron:router) : Routing specifically designed for Meteor.
- [jabbslad:basic-auth](https://atmospherejs.com/meteor/jabbslad:basic-auth) : Add HTTP Basic Auth support to your application.
- [less](https://atmospherejs.com/meteor/less) : Leaner CSS language.
- [mike:mocha](https://atmospherejs.com/meteor/mike:mocha) : Run mocha tests in the browser.
- [mquandalle:bower](https://atmospherejs.com/meteor/mquandalle:bower) : Use Bower packages in your Meteor app.
- [nemo64:bootstrap](https://atmospherejs.com/meteor/nemo64:bootstrap) : Highly configurable bootstrap integration.
- [pcel:loading](https://atmospherejs.com/meteor/pcel:loading) : A beautiful loading splash screen (please-wait + spinkit bundle).
- [spiderable](https://atmospherejs.com/meteor/spiderable) : Makes the application crawlable to web spiders.
- [tap:i18n](https://atmospherejs.com/meteor/tap:i18n) : A comprehensive internationalization solution for Meteor.
- [twbs:bootstrap](https://atmospherejs.com/meteor/twbs:bootstrap) : The most popular front-end framework for developing responsive, mobile first projects on the web.

# Directory Structure

```
├── meteor-boilerplate/
│   ├── .meteor
│   ├── client
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

# Installation

1. Clone this repo to `<yourapp>` :  

	`git clone https://github.com/2associes/meteor-boilerplate.git <yourapp>`

2. Remove `.git` :  

	`cd <yourapp> && rm -rf .git`

3. Start `meteor` :  

	`meteor`

