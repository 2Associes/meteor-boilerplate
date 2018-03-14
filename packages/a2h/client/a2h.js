import './a2h.html'

Template.a2h.onRendered(function () {
  if (AddToHomeScreen.checkConditionsPassed.get()) {
    $('.a2h').addClass('show')
  }
})

Template.a2h.helpers({
  a2h: () => AddToHomeScreen.getSettings(),
  checkConditionsPassed: () => AddToHomeScreen.checkConditionsPassed.get()
})

Template.a2h.events({
  'click .a2h-close'() {
    $('.a2h').removeClass('show')
  }
})
