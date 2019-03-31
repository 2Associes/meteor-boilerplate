import { FlowRouter } from 'meteor/kadira:flow-router'
import moment from 'moment'

const boilerplateRelease = '1.20.0'

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

Template.registerHelper('returnIf', function (condition, value) {
  if (condition) {
    return value
  }
  return undefined
})

Template.registerHelper('returnUnless', function (condition, value) {
  if (!condition) {
    return value
  }
  return undefined
})

Template.registerHelper('isEqual', function (value1, value2) {
  return value1 === value2
})

Template.registerHelper('isNotEqual', function (value1, value2) {
  return value1 !== value2
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

Template.registerHelper('concat', function (...args) {
  return Array.prototype.slice.call(args, 0, -1).join('')
})
