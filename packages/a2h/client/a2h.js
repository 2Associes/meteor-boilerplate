import './a2h.html'

Template.a2h.onRendered(() => {
  console.log('Hello world!')
})

Template.a2h.helpers({
  bodyText() {
    return this.bodyText
  },
  closeText() {
    return this.closeText
  }
})
