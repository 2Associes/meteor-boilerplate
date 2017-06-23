boilerplateRelease = '1.8.0'
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
