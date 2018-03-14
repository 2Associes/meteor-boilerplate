import { Session } from 'meteor/session'
import './a2h.html'

Template.a2h.onRendered(function () {
  if (Session.get('a2h-conditions')) {
    $('.a2h').addClass('show')
  }
})

Template.a2h.helpers({
  a2h: () => Session.get('a2h'),
  conditionsPassed: () => Session.get('a2h-conditions')
})

Template.a2h.events({
  'click .a2h-close'() {
    $('.a2h').removeClass('show')
  }
})
