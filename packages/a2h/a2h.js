import { Session } from 'meteor/session'

class A2H {
  constructor() {
    this.defaults = {
      image: 'http://placehold.it/180',
      text: 'Install this web app on your device: tap the <strong>Share</strong> icon and then <strong>Add to Home Screen.</strong>',
      close: 'Close',
      recurrences: 3
    }

    this.settings = {
      ...this.defaults
    }
  }

  init(...args) {
    this.setSettings(args[0])
    this.conditions()
  }

  deviceCheck = () => {
    // const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
    // const isStandalone = (window.navigator.standalone === false)

    const iOS = true
    const isStandalone = true

    if (iOS && isStandalone) return true

    return false
  }

  conditions() {
    if (this.deviceCheck() && !Session.get('a2h-conditions')) {
      if (localStorage.addToHomeScreenCount && Number(localStorage.addToHomeScreenCount) < this.settings.recurrences) {
        localStorage.addToHomeScreenCount = Number(localStorage.addToHomeScreenCount) + 1
        Session.set('a2h-conditions', true)
      } else if (!localStorage.addToHomeScreenCount) {
        localStorage.addToHomeScreenCount = 0
      }
    }
  }

  setSettings(settings) {
    this.settings = {
      ...this.settings,
      ...settings
    }
    Session.set('a2h', this.settings)
  }
}

AddToHomeScreen = new A2H()
