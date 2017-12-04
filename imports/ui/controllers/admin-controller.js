import { Template } from 'meteor/templating'

import './user-controller.js'

Template.adminController.helpers({
  target() {
    if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'default-group')) return 'notFound'
    return this.adminTargetTemplate
  }
})
