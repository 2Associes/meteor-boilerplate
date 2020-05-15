// This file runs only when testing
// Always generate fixtures when testing

import { Meteor } from 'meteor/meteor'
import { Paragraphs } from '../../api/paragraphs'
import { generateParagraphs, generateUsers } from '../../utils/server/fixtures'

Meteor.startup(() => {
  // if the database is empty on server start, create some sample data.
  if (!Paragraphs.findOne()) {
    generateParagraphs()
  }

  if (!Meteor.users.findOne()) {
    // No user in the database... Create some sample users with roles...
    generateUsers()
  }
})
