import { Meteor } from 'meteor/meteor'
import { VALIDATION_FAILED } from './error-types'
import definitions from './error-definitions'
import Validator from './Validator'

export function getErrorDefinition(errorKey) {
  return definitions[errorKey]
}

/**
 * Property validator
 *
 * @param {stirng} targetProp - The target property name
 * @returns {Validator}
 */
export function prop(targetProp) {
  return new Validator(targetProp)
}

/**
 * Validate properties
 * Use to validate data against validators
 *
 * @param {Validator[]} validators - An array of validators
 * @param {Object} props           - The data to be validated
 */
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
