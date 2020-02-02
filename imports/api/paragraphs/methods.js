import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { check } from 'meteor/check'
import { Paragraphs } from './model'

// Method example
export const createParagraph = new ValidatedMethod({
  // Validate before doing anything
  name: 'paragraphs.create',
  validate({ text }) {
    check(text, String)
  },
  run({ text }) {
    if (!this.isSimulation) {
      // Code executed only on server goes here
    }

    // Database insert executed on both client and server
    Paragraphs.insert({
      text,
      createdAt: new Date()
    })
  }
})
