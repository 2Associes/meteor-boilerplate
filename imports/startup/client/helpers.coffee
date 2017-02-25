boilerplateVersion = '1.4.2'
Template.registerHelper 'boilerplateVersion', ->
	boilerplateVersion

# Format helper for dates using momentJS. Usage in template {{localizedDateAndTime createdAt}}
Template.registerHelper 'localizedDateAndTime', (date) ->
	if date
    moment(date).fromNow()


# Format helper for dates using momentJS. Usage in template {{formatDate createdAt}}
Template.registerHelper 'formatDate', (date) ->
  if date
    moment(date).format 'LL'
