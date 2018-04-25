Meteor.startup(() => {
  Tracker.autorun(() => {
    AddToHomeScreen.init({
      image: '/favicons/apple-touch-icon-180x180.png',
      text: TAPi18n.__('addToHomeScreen.bodyText'),
      close: TAPi18n.__('addToHomeScreen.closeText')
    })
  })
})
