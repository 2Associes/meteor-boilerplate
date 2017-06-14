# Meteor Boilerplate

[![CircleCI Build Status](https://circleci.com/gh/2Associes/meteor-boilerplate/tree/master.svg?style=shield&circle-token=d1f1cfc9181d3bf9a8a408745dd56a617d36dafd)](https://circleci.com/gh/2Associes/meteor-boilerplate)

A boilerplate for Meteor projects using Less, Font Awesome and a modular, customizable Bootstrap 3.

## Prerequisites

* [Node.js][2] >= v7.10.0
* [npm][4] >= 4.2.0

```
node -v && npm -v
```

We recommand using [Node Version Manager][3]

```
nvm install v6.10.2
nvm use v6.10.2
```

## Installation

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

## Directory Structure

```
├── meteor-boilerplate/
│   ├── .meteor
│   ├── client
│   ├── i18n
│   │   ├── en
│   │   ├── fr
│   ├── imports
│   │   ├── api
│   │   │   ├── server
│   │   ├── startup
│   │   │   ├── client
│   │   │   ├── server
│   │   ├── ui
│   │   │   ├── components
│   │   │   ├── layouts
│   │   │   ├── pages
│   │   │   │   ├── admin
│   │   │   ├── stylesheets
│   │   │   │   ├── themes
│   │   │   │   ├── utilities
│   ├── public
|   │   ├── favicons
|   │   ├── images
|   │   ├── offline
│   ├── server
│   ├── tests
│   │   ├── step-definitions
```

## Included Packages

- [accounts-facebook](https://atmospherejs.com/meteor/accounts-facebook) : Login service for Facebook accounts
- [accounts-password](https://atmospherejs.com/meteor/accounts-password) : Password support for accounts
- [arillo:flow-router-helpers](https://atmospherejs.com/arillo/flow-router-helpers) : Template helpers for flow-router
- [check](https://atmospherejs.com/meteor/check) : Check whether a value matches a pattern
- [digilord:faker](https://atmospherejs.com/digilord/faker) : Faker.js packaged for Meteor. Generate massive amounts of fake data
- [ejson](https://atmospherejs.com/meteor/ejson) : Extended and Extensible JSON library
- [fortawesome:fontawesome](https://atmospherejs.com/fortawesome/fontawesome) : Font Awesome (official): 500+ scalable vector icons, customizable via CSS, Retina friendly
- [huttonr:bootstrap3](https://atmospherejs.com/huttonr/bootstrap3) : Modular, customizable Bootstrap 3.
- [jabbslad:basic-auth](https://atmospherejs.com/meteor/jabbslad:basic-auth) : Add HTTP Basic Auth support to your application
- [kadira:blaze-layout](https://atmospherejs.com/kadira/blaze-layout) : Layout Manager for Blaze (works well with FlowRouter)
- [kadira:flow-router](https://atmospherejs.com/kadira/flow-router) : Carefully Designed Client Side Router for Meteor
- [less](https://atmospherejs.com/meteor/less) : Leaner CSS language
- [meteortoys:allthings](https://atmospherejs.com/meteortoys/allthings) : Insanely Handy Development Tools
- [okgrow:analytics](https://atmospherejs.com/okgrow/analytics) : Complete Google Analytics, Mixpanel, KISSmetrics (and more) integration for Meteor
- [pcel:loading](https://atmospherejs.com/meteor/pcel:loading) : A beautiful loading splash screen (please-wait + spinkit bundle)
- [service-configuration](https://atmospherejs.com/meteor/service-configuration) : Manage the configuration for third-party services
- [session](https://atmospherejs.com/meteor/session) : Session variable
- [softwarerero:accounts-t9n](https://atmospherejs.com/softwarerero/accounts-t9n) : Almost i18n, with standard translations for basic meteor packages
- [spiderable](https://atmospherejs.com/meteor/spiderable) : Makes the application crawlable to web spiders
- [tap:i18n](https://atmospherejs.com/meteor/tap:i18n) : A comprehensive internationalization solution for Meteor
- [tap:i18n-db](https://atmospherejs.com/tap/i18n-db) : Internationalization for Meteor Collections
- [useraccounts:bootstrap](https://atmospherejs.com/useraccounts/bootstrap) : Accounts Templates styled for Twitter Bootstrap
- [useraccounts:flow-routing](https://atmospherejs.com/useraccounts/flow-routing) : UserAccounts package providing routes configuration capability via kadira:flow-router
- [zimme:active-route](https://atmospherejs.com/zimme/active-route) : Active route helpers
- [alanning:roles](https://atmospherejs.com/alanning/roles) : Authorization package for Meteor
- [facebook-config-ui](https://atmospherejs.com/meteor/facebook-config-ui) : Blaze configuration templates for Facebook OAuth
- [audit-argument-checks](https://atmospherejs.com/meteor/audit-argument-checks#audit-argument-checks) : Try to detect inadequate input sanitization
- [mdg:validated-method](https://atmospherejs.com/mdg/validated-method) : A simple wrapper for Meteor.methods

[1]:https://chimp.readme.io
[2]:https://nodejs.org
[3]:https://github.com/creationix/nvm
[4]:https://www.npmjs.com
