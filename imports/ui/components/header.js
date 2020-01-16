import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'

import './language-switcher'
import './header.html'

const navbarHeight = 56 // value taken from $header-height in the file header.scss
const delta = 5
let didScroll = false
let lastScrollTop = 0

function hasScrolled() {
  const st = $(this).scrollTop()
  if (Math.abs(lastScrollTop - st) <= delta) return

  if (st > lastScrollTop && st > navbarHeight) {
    $('.main-header').removeClass('main-header-down').addClass('main-header-up')
  } else if (st + $(window).height() < $(document).height()) {
    $('.main-header').removeClass('main-header-up').addClass('main-header-down')
  }

  lastScrollTop = st
}

setInterval(() => {
  if (didScroll) {
    hasScrolled()
    didScroll = false
  }
}, 250)

$(window).scroll(() => {
  didScroll = true
})

Template.header.helpers({

  currentUserIdentity() {
    const profile = Meteor.user().profile
    const username = Meteor.user().username
    if (profile !== undefined) {
      return profile.name
    }
    return username
  }
})

Template.header.events({})
