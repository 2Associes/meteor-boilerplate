import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Roles } from 'meteor/alanning:roles'

import './ui-controller.html'

Template.oldUiController.helpers({
  target() {
    let defaultOptions = {}

    if (this.default) {
      defaultOptions = typeof this.default === 'function' ? this.default() : this.default
    }

    let data = {
      // Default options
      template: 'app',
      main: 'notFound',

      ...defaultOptions
    }

    function addOptions(options) {
      data = {
        ...data,
        ...options
      }
    }

    const userId = Meteor.userId()

    for (const controller of Object.keys(this)) {
      const options = typeof this[controller] === 'function' ? (this[controller])() : this[controller]

      if (controller === 'loggedIn' && userId) addOptions(options)
      else if (controller === 'loggedOut' && !userId) addOptions(options)
      else if (controller === 'isInRole' && userId) {
        options.forEach((roleOptions) => {
          if (Roles.userIsInRole(userId, roleOptions.roles, 'default-group')) {
            const newOptions = roleOptions

            delete newOptions.roles

            addOptions(roleOptions)
          }
        })
      }
    }

    const template = data.template

    delete data.template

    return { template, data }
  }
})
