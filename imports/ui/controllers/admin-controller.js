import { Template } from 'meteor/templating'

import './admin-controller.html'

Template.adminController.helpers({
  target() {
    if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'default-group')) return 'notFound'
    return this.adminTargetTemplate
  }
})
