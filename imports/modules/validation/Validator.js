import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import {
  VALIDATION_ERROR,
  MATCH_FAILED,
  WRONG_DATE_FORMAT,
  IS_REQUIRED,
  TOO_SHORT,
  TOO_LONG
} from './error-types'
import { getErrorDefinition } from './utils'

/**
 * Validator class
 * Allows the creation of a validator through a method chain syntax.
 */
export default class Validator {
  /**
   * Validator constructor
   *
   * @param {string} targetProp - The target property name
   */
  constructor(targetProp) {
    this.targetProp = targetProp

    this.isRequired()
  }

  /**
   * Check
   * Adds a validator that will use the meteor/check library to
   * validate the type.
   *
   * @param pattern - check's pattern argument
   * @returns {Validator}
   */
  check(pattern) {
    this.pattern = pattern

    return this
  }

  /**
   * Is optional
   * Makes the Validator stop without throwing an error if the value
   * is undefined.
   *
   * @param {Object} [options]
   * @param {boolean} [options.nullable=true]   - Will also stop if value is null
   * @param {boolean} [options.checkFalsy=true] - Will also stop if value is falsy
   * @returns {Validator}
   */
  isOptional({
    nullable = true,
    checkFalsy = true
  } = {}) {
    this.optional = true
    this.nullable = nullable
    this.checkFalsy = checkFalsy

    return this
  }

  /**
   * Is required
   * Makes the Validator throw an error if the value is undefined.
   * This is the default behavior of a Validator.
   *
   * @param {Object} [options]
   * @param {boolean} [options.nullable=true]   - Will also throw if value is null
   * @param {boolean} [options.checkFalsy=true] - Will also throw if value is falsy
   * @returns {Validator}
   */
  isRequired({
    nullable = true,
    checkFalsy = true
  } = {}) {
    this.optional = false
    this.nullable = nullable
    this.checkFalsy = checkFalsy

    return this
  }

  /**
   * Has min length
   * Adds a validator that will throw an error if the value's length
   * is smaller than the @param length
   *
   * @param {number} length - The minimum length
   * @returns {Validator}
   */
  hasMinLength(length) {
    this.minLength = length

    return this
  }

  /**
   * Has max length
   * Adds a validator that will throw an error if the value's length
   * is larger than the @param length
   *
   * @param {number} length - The maximum length
   * @returns {Validator}
   */
  hasMaxLength(length) {
    this.maxLength = length

    return this
  }

  /**
   * Is date string
   * Adds a validator that will throw an error if the value's format
   * is not YYYY-MM-DD.
   *
   * @returns {Validator}
   */
  isDateString() {
    this.dateString = true

    return this
  }

  /**
   * Throw validation error
   * Throws a format Meteor.Error.
   *
   * @param {string} errorName         - The error name. See ./error-types.js
   * @param {Object} [options]
   * @param {string} [options.reason]  - The error reason message. By default will use ./error-definitions.js
   * @param {Object} [options.details] - The details object attached to the error.
   *                                     Useful for client validation integration
   */
  throw(errorName = VALIDATION_ERROR, { reason = '', details = {} } = {}) {
    throw new Meteor.Error(
      errorName,
      this.targetProp + ': ' + (
        reason ||
        getErrorDefinition(errorName) ||
        getErrorDefinition(VALIDATION_ERROR)
      ),
      { prop: this.targetProp, ...details }
    )
  }

  /**
   * Run Validator
   * Run all validators against the validator's target property
   *
   * @param {Object} props - The method properties object
   */
  run(props = {}) {
    if (typeof props !== 'object') {
      throw new Error('props argument must be an object.')
    }

    const value = props[this.targetProp]

    // Check undefined and null
    if (
      value === undefined ||
      (this.nullable && value === null)
    ) {
      if (this.optional) {
        return
      } else {
        this.throw(IS_REQUIRED)
      }
    }

    // Check type
    if (this.pattern) {
      try {
        check(value, this.pattern)
      } catch (error) {
        this.throw(MATCH_FAILED, { reason: error.message })
      }
    }

    // Check falsy
    if (this.checkFalsy && !value) {
      if (this.optional) {
        return
      } else {
        this.throw(IS_REQUIRED)
      }
    }

    // Check length
    if ((this.minLength || this.maxLength)) {
      if (!value.length) {
        throw new Error('could not validate length')
      }

      // Check min length
      if (this.minLength && value.length < this.minLength) {
        this.throw(TOO_SHORT, { details: { length: value.length, minLength: this.minLength } })
      }

      // Check max length
      if (this.maxLength && value.length > this.maxLength) {
        this.throw(TOO_LONG, { details: { length: value.length, maxLength: this.maxLength } })
      }
    }

    // Check date string format
    if (this.dateString && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      this.throw(WRONG_DATE_FORMAT)
    }
  }
}
