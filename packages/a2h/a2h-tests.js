// Import Tinytest from the tinytest Meteor package.
// import { Tinytest } from 'meteor/tinytest'

// Import and rename a variable exported by a2h.js.
import { name as packageName } from 'meteor/a2h'

// Write your tests here!
// Here is an example.
Tinytest.add('a2h - example', function (test) {
  test.equal(packageName, 'a2h')
})
