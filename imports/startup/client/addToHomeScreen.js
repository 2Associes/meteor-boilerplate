import { TAPi18n } from 'meteor/tap:i18n'

Meteor.startup(() => {
  Tracker.autorun(() => {
    AddToHomeScreen.init({
      close: 'Something else',
      text: TAPi18n.__('addToHomeScreen.bodyText'),
      recurrences: 999
    })
  })
})
