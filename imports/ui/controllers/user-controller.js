import { Template } from 'meteor/templating'

import './user-controller.html'

Template.userController.helpers({
  target() {
    return this.userTargetTemplate
  }
})
