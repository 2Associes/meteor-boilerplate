import './a2h.html'

Template.a2h.onRendered(() => {
  console.log('Hello world!')
})

Template.a2h.helpers({
  bodyText() {
    if (this.bodyText) return this.bodyText
    return 'Install this web app on your device: tap the "Share" icon and then "Add to Home Screen"'
  },
  closeText() {
    if (this.closeText) return this.closeText
    return 'Close'
  }
})
