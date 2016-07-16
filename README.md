# Meteor Boilerplate

A boilerplate for Meteor projects using Less (with Autoprefixer), Font Awesome and a modular, customizable Bootstrap 3.

# Included Packages

- [session](https://atmospherejs.com/meteor/session) : Session variable.
- [iron:router](https://atmospherejs.com/meteor/iron:router) : Routing specifically designed for Meteor.
- [jabbslad:basic-auth](https://atmospherejs.com/meteor/jabbslad:basic-auth) : Add HTTP Basic Auth support to your application.
- [mike:mocha](https://atmospherejs.com/meteor/mike:mocha) : Run mocha tests in the browser.
- [pcel:loading](https://atmospherejs.com/meteor/pcel:loading) : A beautiful loading splash screen (please-wait + spinkit bundle).
- [spiderable](https://atmospherejs.com/meteor/spiderable) : Makes the application crawlable to web spiders.
- [tap:i18n](https://atmospherejs.com/meteor/tap:i18n) : A comprehensive internationalization solution for Meteor.
- [flemay:less-autoprefixer](https://atmospherejs.com/flemay/less-autoprefixer) : The dynamic stylesheet language + Autoprefixer.
- [fortawesome:fontawesome](https://atmospherejs.com/fortawesome/fontawesome) : Font Awesome (official): 500+ scalable vector icons, customizable via CSS, Retina friendly.
- [huttonr:bootstrap3](https://atmospherejs.com/huttonr/bootstrap3) : Modular, customizable Bootstrap 3.

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
│   │   ├── stylesheets
│   │   │   ├── themes
│   │   │   ├── utilities
│   │   ├── templates
│   │   │   ├── 404
│   │   │   ├── home
│   │   │   ├── layouts
│   │   │   ├── loading
│   │   │   ├── shared
│   ├── lib
│   │   ├── i18n
│   ├── public
│   │   ├── images
│   ├── server
```
