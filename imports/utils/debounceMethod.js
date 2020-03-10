import { Meteor } from 'meteor/meteor'
import { _ } from 'meteor/underscore'

/**
 * Create a debounce version of the provided Meteor method
 * @param {string} methodName - The method name
 * @param {debounceDelay} debounceDelay - The debonce delay (defaults to 1500ms)
 */
export default function debounceMethod(methodName, debounceDelay = 1500) {
  return _.debounce(Meteor.call.bind(Meteor, methodName), debounceDelay)
}
