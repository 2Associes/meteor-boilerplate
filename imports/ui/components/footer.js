import { Meteor } from 'meteor/meteor';

import './footer.html';

Template.footer.helpers({
  meteorRelease() {
    return Meteor.release;
  },
});

Template.footer.events({});
