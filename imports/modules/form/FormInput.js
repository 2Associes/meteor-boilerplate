import { ReactiveVar } from 'meteor/reactive-var'
import validation from '../../api/validation.js'

export default class FormInput {
  constructor(input, callback) {
    if (typeof input === 'string') {
      this.name = input
      this.events = {}
    } else {
      const { name, key, liveValidation = true, defaultValue = '', events = {} } = input

      this.name = name
      this.key = key
      this.liveValidation = liveValidation
      this.defaultValue = defaultValue
      this.events = events
    }

    this.reactiveValue = new ReactiveVar(this.defaultValue)
    this.edited = new ReactiveVar(false)
    this.error = new ReactiveVar()
    this.initiated = new ReactiveVar(false)

    if (typeof callback === 'function') callback(this)
  }

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

  forceValidate(payload) {
    this.setEdited(true)
    this.validate(payload)
  }

  callEvent(eventKey, context, event, templateInstance) {
    if (typeof this.events[eventKey] === 'function') this.events[eventKey].call(context, event, templateInstance, this.getError())
  }

  readySubscriptions() {
    if (typeof this.subscriptionsReady === 'function') this.subscriptionsReady()
  }

  isReady() {
    return this.initiated.get()
  }

  initValue(value) {
    if (!this.initiated.get()) {
      this.reactiveValue.set(value)
      this.initiated.set(true)
      this.initialValue = value
    }
  }

  setValue(value, payload = this.getPayload()) {
    this.reactiveValue.set(value)
    this.setEdited(true)
    if (!this.initiated.get()) this.initiated.set(true)
    if (this.liveValidation) this.validate(payload)
  }

  getValue() {
    return this.reactiveValue.get()
  }

  revertValue() {
    this.reactiveValue.set(this.initialValue)
  }

  getPayload() {
    if (typeof this.payload === 'function') return this.payload()
    return undefined
  }

  setError(error) {
    this.error.set(error)
  }

  getError() {
    return this.error.get()
  }

  clearError() {
    this.error.set(null)
  }

  setEdited(edited) {
    this.edited.set(edited)
  }

  getEdited() {
    return this.edited.get()
  }

  clearEdited() {
    this.edited.set(false)
  }

  setToDefault() {
    this.reactiveValue.set(this.defaultValue)
  }
}
