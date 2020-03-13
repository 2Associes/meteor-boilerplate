import * as types from './error-types'

export default {
  [types.VALIDATION_FAILED]: 'Validation failed with one or more errors',
  [types.VALIDATION_ERROR]: 'Something went wrong during validation',
  [types.MATCH_FAILED]: 'Unexpected type during validation',
  [types.IS_REQUIRED]: 'Value is required',
  [types.TOO_SHORT]: 'Value is too short',
  [types.TOO_LONG]: 'Value is too long',
  [types.WRONG_DATE_FORMAT]: 'Date should be in YYYY-MM-DD format'
}
