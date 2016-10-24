import { Meteor } from 'meteor/meteor';

import './header.html';

Template.header.helpers({
	isAdmin() {
		return Roles.userIsInRole(Meteor.userId(), 'admin');
	}
});
