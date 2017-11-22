import Form from '../../../modules/form/Form.js'

import './features-reactive-form.html'

import './examples/examples-reactive-input.js'

Template.featuresReactiveForm.onCreated(function () {
  this.form = new Form()

  this.form.createInput([{
    name: 'foo',
    key: 'foo'
  }])
})

Template.featuresReactiveForm.helpers({
  inputs: () => Template.instance().form.inputs
})
