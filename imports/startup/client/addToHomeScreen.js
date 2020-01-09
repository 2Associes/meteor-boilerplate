import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { AddToHomeScreen } from 'meteor/2associes:a2h'
import { TAPi18n } from 'meteor/tap:i18n'

Meteor.startup(() => {
  Tracker.autorun(() => {
    AddToHomeScreen.init({
      image: '/favicons/apple-touch-icon-180x180.png',
      text: TAPi18n.__('addToHomeScreen.bodyText'),
      close: TAPi18n.__('addToHomeScreen.closeText')
    })
  })
})
