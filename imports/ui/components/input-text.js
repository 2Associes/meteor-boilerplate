import { Template } from 'meteor/templating'

import './input-text.html'

Template.inputText.onCreated(function () {
  if (this.data.input) this.data.input.initValue(this.data.value)
})

Template.inputText.helpers({
  hasError() {
    if (this.input.getError()) return 'is-invalid'
    return undefined
  }
})

Template.inputText.events({
  'input .js-input-text'(event) {
    this.input.setValue(event.target.value)
  }
})
