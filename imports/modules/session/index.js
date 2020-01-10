import { Session } from 'meteor/session'

// General session variables
Session.set({
  languageReady: false,
  title: {
    string: 'fizik.ca',
    options: {
      pattern: false,
      key: true
    }
  }
})
