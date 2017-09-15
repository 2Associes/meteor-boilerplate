import { Meteor } from 'meteor/meteor';
import './header.html';

import '../../ui/components/language-switcher';

Template.header.helpers({

  currentUserIdentity() {
    const profile = Meteor.user().profile;
    const username = Meteor.user().username;
    if (profile !== undefined) {
      return profile.name;
    }
    return username;
  },
});

Template.header.events({});
