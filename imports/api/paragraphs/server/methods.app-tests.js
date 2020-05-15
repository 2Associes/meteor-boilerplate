// Methods added here will only be registered when testing

import { Meteor } from 'meteor/meteor'
import { Paragraphs } from '../model'
import { generateParagraphs } from '../../../utils/server/fixtures'

Meteor.methods({
  'paragraphs.reset'() {
    Paragraphs.remove({})

    generateParagraphs()
  }
})
