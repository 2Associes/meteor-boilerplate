import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

import ExamplesReactiveInput from './examples/examples-reactive-input.js'
import './features-reactive-form.html'

Template.featuresReactiveForm.onCreated(function () {
  this.formData = {
    foo: new ReactiveVar('Bar')
  }

  this.form = {
    foo: new ExamplesReactiveInput()
      .on('input', (value) => {
        this.formData.foo.set(value)
      })
  }
})

Template.featuresReactiveForm.helpers({
  formData: () => Template.instance().formData,
  form: () => Template.instance().form
})
