import { Template } from 'meteor/templating'

import './examples-reactive-input.html'

Template.examplesReactiveInput.onCreated(function () {
  if (this.data.input) this.data.input.initValue(this.data.value)
})

Template.examplesReactiveInput.helpers({
  hasError() {
    if (this.input.getError()) return 'is-invalid'
    return undefined
  }
})

Template.examplesReactiveInput.events({
  'input .js-input-text'(event) {
    this.input.setValue(event.target.value)
  }
})
