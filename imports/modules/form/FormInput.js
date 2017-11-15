import { ReactiveVar } from 'meteor/reactive-var'
import validation from '../../api/validation.js'

export default class FormInput {
  constructor(input, callback) {
    if (typeof input === 'string') {
      this.name = input
      this.events = {}
    } else {
      const { name, key, liveValidation = true, defaultValue = '', events = {}, subscriptionsReady } = input

      this.name = name
      this.key = key
      this.liveValidation = liveValidation
      this.defaultValue = defaultValue
      this.events = events
      this.subscriptionsReady = subscriptionsReady
    }

    this.reactiveValue = new ReactiveVar(this.defaultValue)
    this.edited = new ReactiveVar(false)
    this.error = new ReactiveVar()
    this.initiated = new ReactiveVar(false)

    if (typeof callback === 'function') callback(this)
  }

  initValue(value) {
    if (!this.initiated.get()) {
      this.reactiveValue.set(value)
      this.initiated.set(true)
      this.initialValue = value
    }
  }

  getValue() {
    return this.reactiveValue.get()
  }

  setValue(value, payload = this.getPayload()) {
    this.reactiveValue.set(value)
    this.setEdited(true)
    if (!this.initiated.get()) this.initiated.set(true)
    if (this.liveValidation) this.validate(payload)
  }

  revertValue() {
    this.reactiveValue.set(this.initialValue)
  }

  setToDefault() {
    this.reactiveValue.set(this.defaultValue)
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

  getError() {
    return this.error.get()
  }

  setError(error) {
    this.error.set(error)
  }

  clearError() {
    this.error.set(null)
  }

  callEvent(eventKey, context, event, templateInstance) {
    if (typeof this.events[eventKey] === 'function') this.events[eventKey].call(context, event, templateInstance, this.getError())
  }

  getEdited() {
    return this.edited.get()
  }

  setEdited(edited) {
    this.edited.set(edited)
  }

  clearEdited() {
    this.edited.set(false)
  }

  readySubscriptions() {
    if (typeof this.subscriptionsReady === 'function') this.subscriptionsReady()
  }

  isReady() {
    return this.initiated.get()
  }

  getPayload() {
    if (typeof this.payload === 'function') return this.payload()
    return undefined
  }
}
