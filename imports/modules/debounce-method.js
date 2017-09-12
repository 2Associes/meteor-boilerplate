import { Meteor } from 'meteor/meteor'
import { _ } from 'meteor/underscore'

/**
 * Create a debounce version of the provided Meteor method
 * @param {string} methodName - The method name
 * @param {debounceDelay} debounceDelay - The debonce delay (defaults to 1500ms)
 */
export default (methodName, debounceDelay = 1500) =>
  _.debounce(Meteor.call.bind(Meteor, methodName), debounceDelay)

// To add a delay to :
// Meteor.call('users.data.name.update', 'Firstname Lastname')
//
// Do this :
// import debounceMethod from '../../modules/debounce-method'
//
// const updateUserName = debounceMethod('users.data.name.update') // default 1500ms delay
// or :
// const updateUserName = debounceMethod('users.data.name.update', 5000) // 5000ms delay
// then :
// updateUserName('Firstname Lastname')
