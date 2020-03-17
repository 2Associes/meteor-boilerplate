import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'

import '../language-switcher'
import './template.html'

Template.header.onRendered(function () {
  const HEADER_IS_DOWN_CLASS = 'is-down'
  const HEADER_IS_UP_CLASS = 'is-up'

  const DELTA = 5

  const $element = this.$('.js-hide-on-scroll')

  let didScroll = false
  let lastScrollTop = 0

  this.hideHeader = () => {
    $element
      .removeClass(HEADER_IS_DOWN_CLASS)
      .addClass(HEADER_IS_UP_CLASS)
  }

  this.showHeader = () => {
    $element
      .removeClass(HEADER_IS_UP_CLASS)
      .addClass(HEADER_IS_DOWN_CLASS)
  }

  this.handleScroll = () => {
    if (!didScroll) {
      didScroll = true

      window.requestAnimationFrame(() => {
        const $window = $(window)

        const scrollTop = $window.scrollTop()
        const elementHeight = $element.outerHeight()

        if (Math.abs(lastScrollTop - scrollTop) > DELTA) {
          if (scrollTop > lastScrollTop && scrollTop > elementHeight) {
            this.hideHeader()
          } else if (scrollTop + $window.height() < $(document).height()) {
            this.showHeader()
          }
        } else if (scrollTop === 0) {
          this.showHeader()
        }

        lastScrollTop = scrollTop
        didScroll = false
      })
    }
  }

  this.handleScroll()

  window.addEventListener('scroll', this.handleScroll)
  window.addEventListener('resize', this.handleScroll)
  window.addEventListener('orientationchange', this.handleScroll)
})

Template.header.onDestroyed(() => {
  window.removeEventListener('scroll', this.handleScroll)
  window.removeEventListener('resize', this.handleScroll)
  window.removeEventListener('orientationchange', this.handleScroll)
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
