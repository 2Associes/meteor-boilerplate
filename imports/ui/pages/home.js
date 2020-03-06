import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { TAPi18n } from 'meteor/tap:i18n'
import { Paragraphs } from '../../api/paragraphs'
import setPageTitle from '../../modules/setPageTitle'

import ExampleInput from '../components/example-input'
import './home.html'

Template.home.onCreated(function () {
  setPageTitle('home')

  // Subscriptions
  TAPi18n.subscribe('paragraphs')

  // Create reactive form data
  this.formData = {
    foo: new ReactiveVar('Bar')
  }

  // Create components
  this.form = {
    foo: new ExampleInput()
      // Add listeners
      .on('input', (value) => {
        // Update form data
        this.formData.foo.set(value)
      })
  }
})

Template.home.helpers({
  /**
   * Paragraph collection documents
   */
  paragraphs() {
    return Paragraphs.find()
  },
  // Make form accessible
  formData: () => Template.instance().formData,
  form: () => Template.instance().form
})

Template.home.events({})
