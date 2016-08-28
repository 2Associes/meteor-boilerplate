import { Meteor } from 'meteor/meteor';

import { Paragraphs } from '../../api/paragraphs.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (!Paragraphs.findOne()) {
    console.log('No data');
  }
});
