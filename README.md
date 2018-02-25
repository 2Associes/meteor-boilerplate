# Meteor Boilerplate

[![CircleCI Build Status](https://circleci.com/gh/2Associes/meteor-boilerplate/tree/master.svg?style=shield&circle-token=d1f1cfc9181d3bf9a8a408745dd56a617d36dafd)](https://circleci.com/gh/2Associes/meteor-boilerplate)

A boilerplate for Meteor projects using Sass, Font Awesome and Bootstrap 4.

## Prerequisites

* [Node.js][2] >= v8.8.1
* [npm][4] >= 5.4.2

```
node -v && npm -v
```

We recommand using [Node Version Manager][3] but [Yarn][5] can also be used.

```
nvm install v8.8.1
nvm use v8.8.1
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

- [accounts-facebook](https://atmospherejs.com/meteor/accounts-facebook) : Login service for Facebook accounts
- [accounts-password](https://atmospherejs.com/meteor/accounts-password) : Password support for accounts
- [alanning:roles](https://atmospherejs.com/alanning/roles) : Authorization package for Meteor
- [aldeed:collection2-core](https://atmospherejs.com/aldeed/collection2-core) : Core package for aldeed:collection2
- [aldeed:template-extension](https://atmospherejs.com/aldeed/template-extension) : Adds template features currently missing from the templating package
- [arillo:flow-router-helpers](https://atmospherejs.com/arillo/flow-router-helpers) : Template helpers for flow-router
- [check](https://atmospherejs.com/meteor/check) : Check whether a value matches a pattern
- [digilord:faker](https://atmospherejs.com/digilord/faker) : Faker.js packaged for Meteor. Generate massive amounts of fake data
- [ejson](https://atmospherejs.com/meteor/ejson) : Extended and Extensible JSON library
- [email](https://atmospherejs.com/meteor/email) : Send email messages
- [facebook-config-ui](https://atmospherejs.com/meteor/facebook-config-ui) : Blaze configuration templates for Facebook OAuth
- [fortawesome:fontawesome](https://atmospherejs.com/fortawesome/fontawesome) : Font Awesome (official): 500+ scalable vector icons, customizable via CSS, Retina friendly
- [fourseven:scss](https://atmospherejs.com/fourseven/scss) : Style with attitude. Sass and SCSS support for Meteor.js.
- [jabbslad:basic-auth](https://atmospherejs.com/meteor/jabbslad:basic-auth) : Add HTTP Basic Auth support to your application
- [juliancwirko:postcss](https://atmospherejs.com/juliancwirko/postcss) : Minifier for Meteor with PostCSS processing - use Autoprefixer and others with ease
- [kadira:blaze-layout](https://atmospherejs.com/kadira/blaze-layout) : Layout Manager for Blaze (works well with FlowRouter)
- [kadira:flow-router](https://atmospherejs.com/kadira/flow-router) : Carefully Designed Client Side Router for Meteor
- [mdg:seo](https://atmospherejs.com/mdg/seo) : Provide SEO support for enabled apps
- [mdg:validated-method](https://atmospherejs.com/mdg/validated-method) : A simple wrapper for Meteor.methods
- [meteorhacks:ssr](https://atmospherejs.com/meteorhacks/ssr) : Server Side Rendering for Meteor with Blaze
- [meteortoys:allthings](https://atmospherejs.com/meteortoys/allthings) : Insanely Handy Development Tools
- [okgrow:analytics](https://atmospherejs.com/okgrow/analytics) : Complete Google Analytics, Mixpanel, KISSmetrics (and more) integration for Meteor
- [pcel:loading](https://atmospherejs.com/meteor/pcel:loading) : A beautiful loading splash screen (please-wait + spinkit bundle)
- [reywood:publish-composite](https://atmospherejs.com/reywood/publish-composite) : Publish a set of related documents from multiple collections with a reactive join
- [service-configuration](https://atmospherejs.com/meteor/service-configuration) : Manage the configuration for third-party services
- [session](https://atmospherejs.com/meteor/session) : Session variable
- [softwarerero:accounts-t9n](https://atmospherejs.com/softwarerero/accounts-t9n) : Almost i18n, with standard translations for basic meteor packages
- [spiderable](https://atmospherejs.com/meteor/spiderable) : Makes the application crawlable to web spiders
- [tap:i18n](https://atmospherejs.com/meteor/tap:i18n) : A comprehensive internationalization solution for Meteor
- [tap:i18n-db](https://atmospherejs.com/tap/i18n-db) : Internationalization for Meteor Collections
- [useraccounts:bootstrap](https://atmospherejs.com/useraccounts/bootstrap) : Accounts Templates styled for Twitter Bootstrap
- [useraccounts:flow-routing](https://atmospherejs.com/useraccounts/flow-routing) : UserAccounts package providing routes configuration capability via kadira:flow-router
- [webtempest:animate](https://atmospherejs.com/webtempest/animate) : Easily perform CSS animations and transitions in Meteo
- [zimme:active-route](https://atmospherejs.com/zimme/active-route) : Active route helpers

## Authors

* **Hugues Brunelle** - *Lead Front-end Developer* - [2 Associés](https://github.com/2Associes)
* **Andrés Flores** - *Front-end Developer* - [PerfectNull](https://github.com/PerfectNull)
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
