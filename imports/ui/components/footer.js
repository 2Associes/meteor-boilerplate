import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'

import './footer.html'

Template.footer.helpers({
  meteorRelease() {
    return Meteor.release
  }
})

Template.footer.events({})
