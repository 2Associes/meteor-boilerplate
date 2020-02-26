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

export default class Validator {
  constructor(propName) {
    this.propName = propName
    this.optional = false
    this.nullable = true
    this.checkFalsy = true
  }

  check(pattern) {
    this.pattern = pattern

    return this
  }

  isOptional({
    nullable = true,
    checkFalsy = true
  } = {}) {
    this.optional = true
    this.nullable = nullable
    this.checkFalsy = checkFalsy

    return this
  }

  hasMinLength(length = 1) {
    this.minLength = length

    return this
  }

  hasMaxLength(length = 10) {
    this.maxLength = length

    return this
  }

  isDateString() {
    this.dateString = true

    return this
  }

  throw(errorName = VALIDATION_ERROR, { reason = '', details = {} } = {}) {
    throw new Meteor.Error(
      errorName,
      this.propName + ': ' + (
        reason ||
        getErrorDefinition(errorName) ||
        getErrorDefinition(VALIDATION_ERROR)
      ),
      { prop: this.propName, ...details }
    )
  }

  run(props = {}) {
    if (typeof props !== 'object') {
      throw new Error('props argument must be an object.')
    }

    const value = props[this.propName]

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
