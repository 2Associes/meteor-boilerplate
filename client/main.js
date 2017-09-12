import '../imports/startup'
import '../imports/startup/client'

const getUserLanguage = function () {
  // Put here the logic for determining the user language
  return 'fr-CA'
}

Meteor.startup(() => {
  TAPi18n.setLanguage(getUserLanguage())
  T9n.setLanguage(getUserLanguage())
  $('html').attr('lang', getUserLanguage())
})

// enable service worker
if ('serviceWorker' in navigator) {
  // register service worker
  navigator.serviceWorker.register('/service-worker.js', {
    scope: './'
  })
}
