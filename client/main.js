import 'bootstrap'
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

// Check for registered service worker
if (navigator.serviceWorker.controller) {
  console.log('[PWA] Active service worker found, no need to register')
} else {
  // Register the ServiceWorker
  navigator.serviceWorker.register('service-worker.js', {
    scope: './'
  }).then(function (reg) {
    console.log(`[PWA] Service worker has been registered for scope: ${reg.scope}`)
  })
}
