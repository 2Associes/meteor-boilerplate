import { Meteor } from 'meteor/meteor';

import { Visitors } from '../../api/visitors';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (!Visitors.findOne()) {
    // No paragraph in the database... Create some sample paragraphs...
    const timestamp = new Date().getTime();

    Visitors.insert({
      from: 'Rive-Sud',
      heardFrom: 'Autre',
      createdAt: new Date(timestamp),
    });
  }
});
