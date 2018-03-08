Package.describe({
  name: 'a2h',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse((api) => {
  api.use(['templating'], 'client')
  api.versionsFrom('1.6.1')
  api.use('ecmascript')
  api.add_files('client/a2h.html', 'client')
  api.add_files('client/a2h.js', 'client')
  api.mainModule('a2h.js')
})

Package.onTest((api) => {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('a2h')
  api.mainModule('a2h-tests.js')
})
