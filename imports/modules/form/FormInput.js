import { ReactiveVar } from 'meteor/reactive-var'
import validation from '../../api/validation.js'

/**
 * FormInput class
 * Instanciates an input object that manages its reactive errors, events and value.
 * Typically used within a form. See {@link Form.createInput}.
 * @param {string|object} input - The input name or a properties object.
 * @param {string} input.name - The input name.
 * @param {key} [input.key] - The key used to validate the value.
 * @param {boolean} [input.liveValidation=true] - Whether to validate on value change or not.
 * @param {*} [input.defaultValue=''] - The starting value before init.
 * @param {object} [input.events] - Customizable event functions. See {@link FormInput.callEvent}.
 * @param {function} [subscriptionsReady] - Function ran when subscription are ready. See {@link FormInput.readySubscriptions}.
 * @param {function} [payload] - Function that returns a payload used by validation.
 */
export default class FormInput {
  constructor(input, callback) {
    if (typeof input === 'string') {
      this.name = input
      this.events = {}
    } else {
      const { name, key, liveValidation = true, defaultValue = '', events = {}, subscriptionsReady, payload } = input

      this.name = name
      this.key = key
      this.liveValidation = liveValidation
      this.defaultValue = defaultValue
      this.events = events
      this.subscriptionsReady = subscriptionsReady
      this.payload = payload
    }

    this.reactiveValue = new ReactiveVar(this.defaultValue)
    this.edited = new ReactiveVar(false)
    this.error = new ReactiveVar()
    this.initiated = new ReactiveVar(false)

    if (typeof callback === 'function') callback(this)
  }

  /**
   * Init value
   * Init input by setting its initial value. Will only have an effect once.
   * Doesn't trigger validation.
   * @param {*} value - The init value.
   * This is the value the input is going to be set to when calling {@link FormInput.revertValue}.
   */
  initValue(value) {
    if (!this.initiated.get()) {
      this.reactiveValue.set(value)
      this.initiated.set(true)
      this.initialValue = value
    }
  }

  /**
   * Get value
   * Returns the input's value.
   */
  getValue() {
    return this.reactiveValue.get()
  }

  /**
   * Set value
   * Set the input's value. Triggers validation.
   * @param {*} value - The value.
   * @param {*} [payload] - A payload used by validation.
   */
  setValue(value, payload = this.getPayload()) {
    this.reactiveValue.set(value)
    this.setEdited(true)
    if (!this.initiated.get()) this.initiated.set(true)
    if (this.liveValidation) this.validate(payload)
  }

  /**
   * Revert value
   * Revert value to its init value. See {@link FormInput.initValue}
   */
  revertValue() {
    if (this.initialValue !== undefined) this.reactiveValue.set(this.initialValue)
    else this.reactiveValue.set(this.defaultValue)
  }

  /**
   * Set to default
   * Sets the input to its default value.
   */
  setToDefault() {
    this.reactiveValue.set(this.defaultValue)
  }

  /**
   * Validate
   * Validates the value using the validation key and sets the error property.
   * Will not look for errors if the input has not been edited yet.
   * @param {*} payload - A payload with data useful to the validation of the value.
   */
  validate(payload = this.getPayload()) {
    if (this.key && this.getEdited()) {
      let validationError

      try {
        validation.validate(this.key, this.getValue(), payload)
      } catch (error) {
        validationError = error

        this.setError(error)
      }

      if (!validationError) this.clearError()
    }
  }

  /**
   * Force validate
   * Changes edited to true to force validation. See {@link FormInput.validate}.
   * @param {*} payload - A payload with data useful to the validation of the value.
   */
  forceValidate(payload) {
    this.setEdited(true)
    this.validate(payload)
  }

  /**
   * Get error
   * Return an error (if any) resulted from validation. See {@link FormInput.validate}.
   */
  getError() {
    return this.error.get()
  }

  /**
   * Set error
   * Set the error property.
   * @param {ErrorClass} error - The error to be saved.
   */
  setError(error) {
    this.error.set(error)
  }

  /**
   * Clear error
   * Clears the input error.
   */
  clearError() {
    this.error.set(null)
  }

  /**
   * Call event
   * Executes an event function provided on instantiation an pass parameters to it.
   * @param {*} eventKey - The event function key in the event object.
   */
  callEvent(eventKey, ...params) {
    if (typeof this.events[eventKey] === 'function') (this.events[eventKey])(...params)
  }

  /**
   * Get edited
   * Returns edited property.
   */
  getEdited() {
    return this.edited.get()
  }

  /**
   * Set edited
   * Sets edited property.
   * @param {boolean} edited - The value.
   */
  setEdited(edited) {
    this.edited.set(edited)
  }

  /**
   * Clear edited
   * Clears edited property
   */
  clearEdited() {
    this.edited.set(false)
  }

  /**
   * Ready subscriptions
   * Calls the subscriptionsReady function.
   * Use this when the subscription is ready.
   */
  readySubscriptions(...args) {
    if (typeof this.subscriptionsReady === 'function') this.subscriptionsReady(...args)
  }

  /**
   * Is ready
   * Returns the initiated property.
   */
  isReady() {
    return this.initiated.get()
  }

  /**
   * Get payload
   * Returns the payload using the payload function.
   */
  getPayload() {
    if (typeof this.payload === 'function') return this.payload()
    return undefined
  }
}
