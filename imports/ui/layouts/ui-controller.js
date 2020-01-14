import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Roles } from 'meteor/alanning:roles'

import './ui-controller.html'

/**
 * Ui Controller
 * Higher-order component that manages the data passed down the template tree based on authentication and authorization checks.
 * Also imports the templates dynamically if provided by a import function.
 * @param {Object} templates - The data that should be passed down the template tree if the checks were to succeed.
 * @param {string|Object} templates.$ - The template properties. Should either be a template name or template data object.
 * @param {string} template.$.template - The template name.
 * @param {Function} [template.$.import] - The template dynamic import function.
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

  this.resolveTemplates = async (templates = {}) => {
    const imports = []
    const data = {}

    for (const key in templates) {
      const template = templates[key]

      // Gather all import promises
      if (typeof template.import === 'function') {
        imports.push(template.import())
      }

      // Format data uniformly
      if (typeof template === 'string') {
        data[key]({ template })
      } else {
        data[key](template)
      }
    }

    // Import all required templates
    if (imports.length) {
      await Promise.all(imports)
    }

    return data
  }

  this.getPageLayout = async ({ templates = {}, options = {} } = {}) => {
    // Define default layout for each state
    const {
      // loggingInTemplates = { main: 'loading' },
      signedOutTemplates = { main: 'signIn' },
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
            return this.resolveTemplates(templates)
          }

          // Render templates for user not in role
          return this.resolveTemplates(notInRoleTemplates)
        }

        // Render templates for signed out user
        return this.resolveTemplates(signedOutTemplates)
      }

      // User is signed in
      if (userId) {
        // Render templates for signed in user
        return this.resolveTemplates(signedInTemplates)
      }
    }

    // Display requested view
    return this.resolveTemplates(templates)
  }

  this.autorun(() => {
    const data = Template.currentData()

    this.getPageLayout(data).then(pageLayout => this.renderData.set(pageLayout))
  })
})

Template.uiController.helpers({
  renderData() {
    return Template.instance().renderData.get()
  }
})
