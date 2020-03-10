import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { ReactiveDict } from 'meteor/reactive-dict'
import { TAPi18n } from 'meteor/tap:i18n'
import { Paragraphs } from '../../../api/paragraphs'
import { types as errorTypes, getErrorMessage } from '../../../modules/validation'
import { setPageTitle } from '../../../modules/head'

import ExampleInput from '../../components/example-input'
import './template.html'

Template.home.onCreated(function () {
  setPageTitle('home')

  // Subscriptions
  TAPi18n.subscribe('paragraphs')

  // Create reactive form data
  this.formData = new ReactiveDict({
    text: ''
  })

  // Create reactive errors
  this.formErrors = new ReactiveVar(null)

  // Create components
  this.formComponents = {
    text: new ExampleInput()
      // Add listeners
      .on('input', (value) => {
        // Update form data
        this.formData.set('text', value)
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
  /**
   * Form field value
   *
   * @param {string} prop - Field prop
   */
  fieldValue(prop) {
    return Template.instance().formData.get(prop)
  },
  /**
   * Form field error message
   *
   * @param {string} prop - Field prop
   */
  fieldErrorMessage(prop) {
    const errors = Template.instance().formErrors.get()

    if (errors) {
      return getErrorMessage(errors[prop])
    }
  },
  /**
   * Form components
   */
  formComponents() {
    return Template.instance().formComponents
  }
})

Template.home.events({
  'submit .js-paragraph-form'(event, instance) {
    event.preventDefault()

    // Get all data
    const data = instance.formData.all()

    // Call Meteor method
    Meteor.callPromise('paragraphs.create', data)
      .then(() => {
        // Remove errors on success
        instance.formErrors.set(null)
      })
      .catch((error) => {
        // Set errors on validation error
        if (error.error === errorTypes.VALIDATION_FAILED) {
          instance.formErrors.set(error.details)
        }
      })
  }
})
