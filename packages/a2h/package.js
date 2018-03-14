Package.describe({
  name: 'a2h',
  version: '0.0.1',
  summary: 'A basic, client side "Add to Home Screen" solution for iOS devices.',
  git: '',
  documentation: 'README.md'
})

Package.onUse((api) => {
  api.versionsFrom('1.6.1')

  api.use([
    'ecmascript',
    'templating',
    'jquery',
    'fourseven:scss@4.5.4'
  ], 'client')

  api.addFiles([
    'client/a2h.html',
    'client/a2h.scss',
    'client/a2h.js',
    'client/body.html',
    'a2h.js'
  ], 'client')

  api.export('AddToHomeScreen')
})

Package.onTest((api) => {
  api.use([
    'ecmascript',
    'tinytest',
    'a2h'
  ])

  api.mainModule('a2h-tests.js')
})
