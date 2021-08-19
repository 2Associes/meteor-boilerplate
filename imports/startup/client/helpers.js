/* global Spacebars */

import { FlowRouter } from 'meteor/kadira:flow-router'
import { Template } from 'meteor/templating'
import moment from 'moment'

import escapeHtmlEntities from '../../utils/client/escapeHtmlEntities'

const boilerplateRelease = '1.26.0'

Template.registerHelper('boilerplateRelease', function () {
  return boilerplateRelease
})

// Format helper for dates using momentJS. Usage in template {{localizedDateAndTime createdAt}}
Template.registerHelper('localizedDateAndTime', function (date) {
  if (date) {
    return moment(date).fromNow()
  }
  return undefined
})

// Format helper for dates using momentJS. Usage in template {{formatDate createdAt}}
Template.registerHelper('formatDate', function (date) {
  if (date) {
    return moment(date).format('LL')
  }
  return undefined
})

// Get current route classename
Template.registerHelper('currentRouteClassname', function () {
  FlowRouter.watchPathChange()
  return FlowRouter.current().route.options.classname
})

Template.registerHelper('_if', function (condition, value, elseValue) {
  if (condition) {
    return value
  }
  return elseValue instanceof Spacebars.kw ? undefined : elseValue
})

Template.registerHelper('_unless', function (condition, value, elseValue) {
  if (!condition) {
    return value
  }
  return elseValue instanceof Spacebars.kw ? undefined : elseValue
})

Template.registerHelper('isEqual', function (value1, value2) {
  return value1 === value2
})

Template.registerHelper('isNotEqual', function (value1, value2) {
  return value1 !== value2
})

Template.registerHelper('isNull', function (value) {
  return value == null
})

Template.registerHelper('isNotNull', function (value) {
  return value != null
})

Template.registerHelper('isGreater', function (value1, value2) {
  return value1 > value2
})

Template.registerHelper('isGreaterOrEqual', function (value1, value2) {
  return value1 >= value2
})

Template.registerHelper('isLess', function (value1, value2) {
  return value1 < value2
})

Template.registerHelper('isLessOrEqual', function (value1, value2) {
  return value1 <= value2
})

Template.registerHelper('not', function (value) {
  return !value
})

Template.registerHelper('and', function (...args) {
  const filteredArgs = args.filter(arg => !(arg instanceof Spacebars.kw))
  let current

  for (let i = 0; i < filteredArgs.length; i++) {
    current = args[i]
    if (!current) return current
  }

  return current
})

Template.registerHelper('or', function (...args) {
  const filteredArgs = args.filter(arg => !(arg instanceof Spacebars.kw))
  let current

  for (let i = 0; i < filteredArgs.length; i++) {
    current = args[i]
    if (current) return current
  }

  return current
})

Template.registerHelper('call', function (func, ...args) {
  if (typeof func === 'function') {
    return func(...args)
  }

  return undefined
})

Template.registerHelper('concat', function (...args) {
  return Array.prototype.slice.call(args, 0, -1).join('')
})

Template.registerHelper('array', function (...args) {
  return args.filter(arg => !(arg instanceof Spacebars.kw))
})

Template.registerHelper('object', function (...args) {
  let key
  const result = {}
  const pairs = args.filter(arg => !(arg instanceof Spacebars.kw))

  pairs.forEach((arg, index) => {
    if (!(index % 2)) {
      key = arg
    } else {
      result[key] = arg
    }
  })

  if (pairs.length % 2) {
    result[key] = undefined
  }

  return result
})

Template.registerHelper('escape', function (str) {
  return escapeHtmlEntities(str)
})

Template.registerHelper('getProp', function (object, key) {
  return object[key]
})
