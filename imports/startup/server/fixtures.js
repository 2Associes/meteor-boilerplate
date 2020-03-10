import { Meteor } from 'meteor/meteor'
import { Paragraphs } from '../../api/paragraphs'
import { generateParagraphs, generateUsers } from '../../utils/server/fixtures'

if (Meteor.settings.private.fixtures) {
  // if the database is empty on server start, create some sample data.
  Meteor.startup(() => {
    if (!Paragraphs.findOne()) {
      generateParagraphs()
    }

    if (!Meteor.users.findOne()) {
      // No user in the database... Create some sample users with roles...
      generateUsers()
    }
  })
}
