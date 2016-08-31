# Meteor Boilerplate

A boilerplate for Meteor projects using Less, Font Awesome and a modular, customizable Bootstrap 3.

# Included Packages

- [aldeed:autoform](https://atmospherejs.com/aldeed/autoform) : Easily create forms with automatic insert and update, and automatic reactive validation.
- [aldeed:collection2](https://atmospherejs.com/aldeed/collection2) : Automatic validation of insert and update operations on the client and server.
- [aldeed:simple-schema](https://atmospherejs.com/aldeed/simple-schema) : A simple schema validation object with reactivity. Used by collection2 and autoform.
- [check](https://atmospherejs.com/meteor/check) : Check whether a value matches a pattern
- [fortawesome:fontawesome](https://atmospherejs.com/fortawesome/fontawesome) : Font Awesome (official): 500+ scalable vector icons, customizable via CSS, Retina friendly
- [huttonr:bootstrap3](https://atmospherejs.com/huttonr/bootstrap3) : Modular, customizable Bootstrap 3.
- [jabbslad:basic-auth](https://atmospherejs.com/meteor/jabbslad:basic-auth) : Add HTTP Basic Auth support to your application
- [kadira:blaze-layout](https://atmospherejs.com/kadira/blaze-layout) : Layout Manager for Blaze (works well with FlowRouter)
- [kadira:flow-router](https://atmospherejs.com/kadira/flow-router) : Carefully Designed Client Side Router for Meteor
- [less](https://atmospherejs.com/meteor/less) : Leaner CSS language
- [pcel:loading](https://atmospherejs.com/meteor/pcel:loading) : A beautiful loading splash screen (please-wait + spinkit bundle)
- [session](https://atmospherejs.com/meteor/session) : Session variable
- [spiderable](https://atmospherejs.com/meteor/spiderable) : Makes the application crawlable to web spiders
- [tap:i18n](https://atmospherejs.com/meteor/tap:i18n) : A comprehensive internationalization solution for Meteor

# Installation

1. Clone this repo to `<yourapp>` :  

	`git clone https://github.com/2associes/meteor-boilerplate.git <yourapp>`

2. Change directory to `<yourapp>` and remove `.git` :  

	`cd <yourapp> && rm -rf .git`

3. Install npm packages :

	`meteor npm install`

4. Start `meteor` :  

	`meteor`

# Directory Structure

```
├── meteor-boilerplate/
│   ├── .meteor
│   ├── client
│   ├── i18n
│   ├── imports
│   │   ├── api
│   │   ├── startup
│   │   │   ├── client
│   │   │   ├── server
│   │   ├── ui
│   ├── public
|   │   ├── images
│   ├── server
```
