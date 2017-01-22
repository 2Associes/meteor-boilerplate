# Meteor Boilerplate

A boilerplate for Meteor projects using Less, Font Awesome and a modular, customizable Bootstrap 3.

# Included Packages

- [accounts-facebook](https://atmospherejs.com/meteor/accounts-facebook) : Login service for Facebook accounts
- [accounts-password](https://atmospherejs.com/meteor/accounts-password) : Password support for accounts
- [aldeed:autoform](https://atmospherejs.com/aldeed/autoform) : Easily create forms with automatic insert and update, and automatic reactive validation.
- [aldeed:collection2](https://atmospherejs.com/aldeed/collection2) : Automatic validation of insert and update operations on the client and server.
- [aldeed:simple-schema](https://atmospherejs.com/aldeed/simple-schema) : A simple schema validation object with reactivity. Used by collection2 and autoform.
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
- [pcel:loading](https://atmospherejs.com/meteor/pcel:loading) : A beautiful loading splash screen (please-wait + spinkit bundle)
- [service-configuration](https://atmospherejs.com/meteor/service-configuration) : Manage the configuration for third-party services
- [session](https://atmospherejs.com/meteor/session) : Session variable
- [softwarerero:accounts-t9n](https://atmospherejs.com/softwarerero/accounts-t9n) : Almost i18n, with standard translations for basic meteor packages
- [spiderable](https://atmospherejs.com/meteor/spiderable) : Makes the application crawlable to web spiders
- [tap:i18n](https://atmospherejs.com/meteor/tap:i18n) : A comprehensive internationalization solution for Meteor
- [useraccounts:bootstrap](https://atmospherejs.com/useraccounts/bootstrap) : Accounts Templates styled for Twitter Bootstrap
- [useraccounts:flow-routing](https://atmospherejs.com/useraccounts/flow-routing) : UserAccounts package providing routes configuration capability via kadira:flow-router
- [zimme:active-route](https://atmospherejs.com/zimme/active-route) : Active route helpers

# Installation

1. Clone this repo to `<yourapp>` :  

	`git clone https://github.com/2associes/meteor-boilerplate.git <yourapp>`

2. Change directory to `<yourapp>` and remove `.git` :  

	`cd <yourapp> && rm -rf .git`

3. Install npm packages :

	`meteor npm install`

4. Start `meteor` :  

	`meteor npm run dev`

5. Install [Chimp][1] locally :

	`npm install chimp`

6. When testing, run `chimp` manually :  

	`meteor npm run test`

# Directory Structure

```
├── meteor-boilerplate/
│   ├── .meteor
│   ├── client
│   ├── features
│   │   ├── sample
│   │   │   ├── support
│   ├── i18n
│   ├── imports
│   │   ├── api
│   │   ├── startup
│   │   │   ├── client
│   │   │   ├── server
│   │   ├── ui
│   │   │   ├── components
│   │   │   ├── layouts
│   │   │   ├── pages
│   │   │   ├── stylesheets
│   │   │   │   ├── themes
│   │   │   │   ├── utilities
│   ├── public
|   │   ├── images
│   ├── server
```

[1]:https://chimp.readme.io
