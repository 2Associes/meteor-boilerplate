import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Roles } from 'meteor/alanning:roles'

import './template.html'

/**
 * Ui Controller
 * Higher-order component that manages the data passed down the template tree based on authentication and authorization checks.
 * @param {Object} templates - The data that should be passed down the template tree if the checks were to succeed.
 * @param {string} [templates.layout="app"] - The name of the template that will be used as the root layout.
 * @param {Object} [options] - The options object.
 * @param {boolean} [options.authenticated] - The required authentication state.
 *   If true, the templates will not render if the user is signed out.
 *   If false, the templates will not render if the user is signed in.
 *   Leave to undefined or set to null if templates don't require an authentication check.
 * @param {Array} [options.roles] - The required roles to render the templates.
 * @param {Object} [options.signedOutTemplates] - The templates used when it is required that the user is signed in.
 * @param {Object} [options.signedInTemplates] - The templates used when it is required that the user is signed out.
 * @param {Object} [options.notInRoleTemplates] - The templates used when it is required that the user is in role.
 */
Template.uiController.onCreated(function () {
  this.renderData = new ReactiveVar({})

  this.getPageLayout = async ({ templates = {}, options = {} } = {}) => {
    // Define default layout for each state
    const {
      // loggingInTemplates = { main: 'loading' },
      signedOutTemplates = { main: 'atForm', state: 'signIn' },
      signedInTemplates = { main: 'home' },
      notInRoleTemplates = { main: 'notFound' }
    } = options

    const userId = Meteor.userId()

    // Requires authentication verification or authorization
    if (options.authenticated != null || options.roles) {
      // User is logging in
      // if (Meteor.loggingIn()) {
      //   // Render logging in templates
      //   return this.resolveTemplates(loggingInTemplates)
      // }

      // Requires signed in user or authorization
      if (options.authenticated === true || options.roles) {
        // User is signed in
        if (userId) {
          // Requires authorization and user is authorized
          // or does not require role but requires signed in user
          if (
            (options.roles && Roles.userIsInRole(userId, options.roles, 'default-group')) ||
            (!options.roles && options.authenticated)
          ) {
            // Render requested templates
            return templates
          }

          // Render templates for user not in role
          return notInRoleTemplates
        }

        // Render templates for signed out user
        return signedOutTemplates
      }

      // User is signed in
      if (userId) {
        // Render templates for signed in user
        return signedInTemplates
      }
    }

    // Display requested view
    return templates
  }

  this.autorun(() => {
    const currentData = Template.currentData()
    const data = {}

    for (const key in currentData) {
      const prop = currentData[key]

      if (typeof prop === 'function') {
        data[key] = prop()
      } else {
        data[key] = prop
      }
    }

    this.getPageLayout(data).then(pageLayout => this.renderData.set(pageLayout))
  })
})

Template.uiController.helpers({
  renderData() {
    return Template.instance().renderData.get()
  },
  layoutTemplate() {
    return Template.instance().renderData.get().layout || 'app'
  }
})
