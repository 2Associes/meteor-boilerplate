import { Meteor } from 'meteor/meteor'
import { VALIDATION_FAILED } from './error-types'
import definitions from './error-definitions'
import Validator from './Validator'

export function getErrorDefinition(errorKey) {
  return definitions[errorKey]
}

export function prop(propName) {
  return new Validator(propName)
}

export function validate(validators, props) {
  if (!Array.isArray(validators)) {
    throw new Error('validators argument must be an array.')
  }

  const errors = []

  validators.forEach(validator => {
    try {
      validator.run(props)
    } catch (error) {
      errors.push(error)
    }
  })

  if (errors.length) {
    throw new Meteor.Error(VALIDATION_FAILED, getErrorDefinition(VALIDATION_FAILED), errors)
  }
}
