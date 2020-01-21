import { ReactiveVar } from 'meteor/reactive-var'
import { isEqual } from 'lodash'
import validation from '../../api/validation.js'

/**
 * FormInput class
 * Instanciates an input object that manages its reactive errors, events and value.
 * Typically used within a form. See {@link Form.createInput}.
 * @param {string|object} input - The input name or a properties object.
 * @param {string} input.name - The input name.
 * @param {sting|[string]} [input.key] - The key used to validate the value.
 * @param {boolean} [input.liveValidation=true] - Whether to validate on value change or not.
 * @param {*} [input.defaultValue=''] - The starting value before init.
 * @param {object} [input.events] - Customizable event functions. See {@link FormInput.callEvent}.
 * @param {function} [subscriptionsReady] - Function ran when subscription are ready. See {@link FormInput.readySubscriptions}.
 * @param {function} [payload] - Function that returns a payload used by validation.
 */
export default class FormInput {
  constructor(input = '') {
    if (typeof input === 'string') {
      this.name = input
      this.key = []
      this.events = {}
    } else {
      const {
        name, key, liveValidation = true, defaultValue = '', events = {}, subscriptionsReady, payload
      } = input

      this.name = name
      if (Array.isArray(key)) this.key = key
      else if (key) this.key = [key]
      else this.key = []
      this.liveValidation = liveValidation
      this.defaultValue = defaultValue
      this.events = events
      this.subscriptionsReady = subscriptionsReady
      this.payload = payload
    }

    this.reactiveValue = new ReactiveVar(this.defaultValue)
    this.initialValue = new ReactiveVar()
    this.edited = new ReactiveVar(false)
    this.error = new ReactiveVar()
    this.initiated = new ReactiveVar(false)
  }

  /**
   * Init value
   * Init input by setting its initial value. Will only have an effect once.
   * Doesn't trigger validation.
   * @param {*} value - The init value.
   * This is the value the input is going to be set to when calling {@link FormInput.revertValue}.
   */
  initValue(value) {
    if (!this.initiated.curValue) {
      this.reactiveValue.set(value)
      this.initialValue.set(value)
      this.validate()
      this.initiated.set(true)
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
    if (this.initialValue.get() !== undefined) this.reactiveValue.set(this.initialValue.get())
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
   * Set default value
   * Changes the default value and updates the input value if it was default
   * @param {*} value - The new defaultValue
   */
  setDefaultValue(value) {
    if (this.defaultValue === this.reactiveValue.curValue) this.reactiveValue.set(value)
    this.defaultValue = value
  }

  /**
   * Validate
   * Validates the value using the validation key and sets the error property.
   * Will not look for errors if the input has not been edited yet.
   * @param {*} [options.payload] - A payload with data useful to the validation of the value.
   */
  validate({ payload = this.getPayload() } = {}) {
    if (this.key.length) {
      let validationError

      try {
        this.key.forEach(key => validation.validate(key, this.getValue(), payload))
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
   * @param {object} [options] - {@link FormInput.validate} options.
   */
  forceValidate(options) {
    this.validate(options)
    this.setEdited(true)
  }

  /**
   * Get error
   * Return an error (if any) resulted from validation. See {@link FormInput.validate}.
   * @param {object} [options.force] - Will return an error even when input has not been edited
   */
  getError({ force = false } = {}) {
    if (force || this.getEdited()) return this.error.get()
    return null
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
   * Attach event
   * @param {string} eventKey - The event key.
   */
  attachEvent(eventKey, callback) {
    this.events[eventKey] = callback
  }

  /**
   * Call event
   * Executes an event function provided on instantiation an pass parameters to it.
   * @param {string} eventKey - The event function key in the event object.
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
   * Is modified
   * Returns true if the value is different form the initial value
   */
  isModified() {
    const value = this.getValue()
    const initialValue = this.initialValue.get()

    if (this.isReady()) {
      if (initialValue == null) {
        if (value !== '' && value != null) {
          return true
        }
      } else if (!isEqual(initialValue, value)) {
        return true
      }
    }

    return false
  }

  /**
   * Get payload
   * Returns the payload using the payload function.
   */
  getPayload() {
    if (typeof this.payload === 'function') return this.payload(this)
    return undefined
  }
}
