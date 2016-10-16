import { Meteor } from 'meteor/meteor';

import { Paragraphs } from '../../api/paragraphs.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {

  if (!Paragraphs.findOne()) {

    console.log('No paragraph in the database... Create some sample paragraphs...');

    let timestamp = new Date().getTime();

    _.each(_.range(3), function(){

      let randomText = faker.lorem.paragraph();

      Paragraphs.insert({
        text: randomText,
        createdAt: new Date(timestamp)
      });

      timestamp += 1000; // ensure unique timestamp.
    });
  }
});
