import { ReactiveVar } from 'meteor/reactive-var'
import FormInput from './FormInput.js'
import FormArray from './FormArray.js'

export default class Form {
  constructor() {
    this.submited = new ReactiveVar(false)
    this.inputs = {}
    this.arrays = {}
  }

  createInput(inputProps) {
    let input

    if (Array.isArray(inputProps)) {
      inputProps.forEach((singleInputProps) => {
        this.createInput(singleInputProps)
      })

      input = this.inputs
    } else {
      input = new FormInput(inputProps)

      this.addInput(input)
    }

    return input
  }

  addInput(input, name) {
    const newInput = input

    if (name) newInput.name = name
    newInput.parentForm = this
    this.inputs[newInput.name] = input
  }

  createArray(name) {
    const array = new FormArray(name)

    array.parentForm = this
    this.arrays[name] = array
  }

  clearValues() {
    this.getInputs().forEach((input) => {
      input.setToDefault()
    })
  }

  getErrors() {
    const errors = this.getInputs().map(input => input.error.get()).filter(error => error)
    if (errors.length) return errors
    return null
  }

  clearErrors() {
    this.getInputs().forEach((input) => {
      input.clearError()
      input.clearEdited()
    })
  }

  setSubmited(submited) {
    this.submited.set(submited)
  }

  clearSubmited() {
    this.submited.set(false)
  }

  revertInputs() {
    this.resetInputs(false)
    this.getInputs().forEach((input) => {
      input.revertValue()
    })
  }

  resetInputs(clear = true) {
    this.clearSubmited()
    if (clear) this.clearValues()
    this.clearErrors()
  }

  getInputs() {
    const inputs = []

    Object.keys(this.inputs).forEach((inputName) => {
      inputs.push(this.inputs[inputName])
    })

    return inputs
  }

  getArrays() {
    const arrays = []

    Object.keys(this.arrays).forEach((arrayName) => {
      arrays.push(this.arrays[arrayName])
    })

    return arrays
  }

  setData(data) {
    this.data = data

    return this
  }

  getData() {
    const inputs = this.getInputs()
    const arrays = this.getArrays()
    const data = {}

    inputs.forEach((input) => {
      data[input.name] = input.getValue()
    })

    arrays.forEach((array) => {
      data[array.name] = array.getData()
    })

    return data
  }

  validateData(...args) {
    let payload
    const callback = args[args.length - 1]

    if (args.length > 1) {
      payload = args.slice(0, args.length)
      if (payload.length === 1) payload = payload[0]
    }

    this.getInputs().forEach((input) => {
      input.forceValidate(payload)
    })

    this.getArrays().forEach((array) => {
      array.getArray().forEach((form) => {
        form.validateData()
      })
    })

    if (typeof callback === 'function') callback(this.getErrors())
  }
}
