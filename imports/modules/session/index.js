import { Session } from 'meteor/session'

// General session variables
Session.set({
  languageReady: false,
  title: {
    string: 'meteor-boilplate',
    options: {
      pattern: false,
      key: true
    }
  }
})
