import './header.html';

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
