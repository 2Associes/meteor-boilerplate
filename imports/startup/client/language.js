import { Tracker } from 'meteor/tracker'
import { TAPi18n } from 'meteor/tap:i18n'
import { T9n } from 'meteor/softwarerero:accounts-t9n'
import moment from 'moment'

// Import needed moment locales
import 'moment/locale/en-ca'
import 'moment/locale/fr-ca'

const getUserLanguage = function () {
  // Put here the logic for determining the user language
  return 'fr-CA'
}

Meteor.startup(() => {
  TAPi18n.setLanguage(getUserLanguage())
  T9n.setLanguage(getUserLanguage())

  // Runs whenever language is changed
  Tracker.autorun(function () {
    const language = TAPi18n.getLanguage()

    // Change html attribute
    $('html').attr('lang', language)

    // Change moment.js locale
    moment.locale(language)
  })
})
