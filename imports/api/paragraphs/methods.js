import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Paragraphs } from './model'
import { validate, prop } from '../../modules/validation'

// Method example
export const createParagraph = new ValidatedMethod({
  // Validate before doing anything
  name: 'paragraphs.create',
  validate(props) {
    validate(props, [
      // All fields are required by default.
      // Add .isOptional() to make optional.
      prop('text').check(String).hasMinLength(20)
    ])
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
