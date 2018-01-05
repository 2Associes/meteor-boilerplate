boilerplateRelease = '1.14.0'
Template.registerHelper 'boilerplateRelease', ->
	boilerplateRelease

# Format helper for dates using momentJS. Usage in template {{localizedDateAndTime createdAt}}
Template.registerHelper 'localizedDateAndTime', (date) ->
	if date
    moment(date).fromNow()


# Format helper for dates using momentJS. Usage in template {{formatDate createdAt}}
Template.registerHelper 'formatDate', (date) ->
  if date
    moment(date).format 'LL'

# Get current route classename
Template.registerHelper 'currentRouteClassname', ->
  FlowRouter.watchPathChange()
  FlowRouter.current().route.options.classname

Template.registerHelper 'returnIf', (condition, value) ->
  if condition
    value

Template.registerHelper 'returnUnless', (condition, value) ->
  if not condition
    value

Template.registerHelper 'isEqual', (value1, value2) ->
  value1 is value2

Template.registerHelper 'isNotEqual', (value1, value2) ->
  value1 isnt value2

Template.registerHelper 'isGreater', (value1, value2) ->
  value1 > value2

Template.registerHelper 'isGreaterOrEqual', (value1, value2) ->
  value1 >= value2

Template.registerHelper 'isLess', (value1, value2) ->
  value1 < value2

Template.registerHelper 'isLessOrEqual', (value1, value2) ->
  value1 <= value2

Template.registerHelper 'concat', ->
  Array.prototype.slice.call arguments, 0, -1
  .join ''
