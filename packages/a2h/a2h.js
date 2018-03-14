import { ReactiveVar } from 'meteor/reactive-var'

class A2H {
  constructor() {
    this.defaults = {
      image: 'http://placehold.it/180',
      text: 'Install this web app on your device: tap the <strong>Share</strong> icon and then <strong>Add to Home Screen.</strong>',
      close: 'Close',
      recurrences: 3
    }

    this.settings = new ReactiveVar()
    this.checkConditionsPassed = new ReactiveVar(false)
  }

  init(...args) {
    this.setSettings(args[0])
    this.checkConditions()
  }

  checkDevice = () => {
    const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
    const isStandalone = (window.navigator.standalone === false)

    // iOS = true
    // isStandalone = true

    if (iOS && isStandalone) return true

    return false
  }

  checkConditions() {
    if (this.checkDevice() && !this.checkConditionsPassed.get()) {
      if (localStorage.addToHomeScreenCount && Number(localStorage.addToHomeScreenCount) < this.getSettings().recurrences) {
        localStorage.addToHomeScreenCount = Number(localStorage.addToHomeScreenCount) + 1
        this.checkConditionsPassed.set(true)
      } else if (!localStorage.addToHomeScreenCount) {
        localStorage.addToHomeScreenCount = 0
      }
    }
  }

  setSettings(settings) {
    this.settings.set({
      ...this.defaults,
      ...settings
    })
  }

  getSettings = () => this.settings.get()
}

AddToHomeScreen = new A2H()
