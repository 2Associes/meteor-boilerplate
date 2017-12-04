import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router'

import './user-controller.html'

Template.userController.helpers({
  target() {
    if (!Meteor.userId()) {
      FlowRouter.go('/sign-in')
      return 'notFound'
    }
    return this.userTargetTemplate
  }
})
