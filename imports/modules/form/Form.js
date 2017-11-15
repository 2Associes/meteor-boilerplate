import { ReactiveVar } from 'meteor/reactive-var'
import FormInput from './FormInput.js'
import FormArray from './FormArray.js'

export default class Form {
  constructor() {
    this.submited = new ReactiveVar(false)
    this.inputs = {}
    this.arrays = {}
  }

  addInput(input, name) {
    const newInput = input

    if (name) newInput.name = name
    newInput.parentForm = this
    this.inputs[newInput.name] = newInput
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

  addArray(array, name) {
    const newArray = array

    if (name) newArray.name = name
    newArray.parentForm = this
    this.arrays[newArray.name] = newArray
  }

  createArray(names) {
    let array

    if (Array.isArray(names)) {
      names.forEach((name) => {
        this.createArray(name)
      })

      array = this.arrays
    } else {
      array = new FormArray(name)

      this.addArray(array)
    }

    return array
  }

  clearValues() {
    this.getInputs().forEach((input) => {
      input.setToDefault()
    })
    this.getArrays().forEach((array) => {
      array.forEach((form) => {
        form.clearValues()
      })
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

  getInputs() {
    const inputs = []

    Object.keys(this.inputs).forEach((inputName) => {
      inputs.push(this.inputs[inputName])
    })

    return inputs
  }

  revertInputs() {
    this.resetInputs(false)
    this.getInputs().forEach((input) => {
      input.revertValue()
    })
    this.getArrays().forEach((array) => {
      array.forEach((form) => {
        form.revertInputs()
      })
    })
  }

  resetInputs(clear = true) {
    this.clearSubmited()
    if (clear) this.clearValues()
    this.clearErrors()
  }

  getArrays() {
    const arrays = []

    Object.keys(this.arrays).forEach((arrayName) => {
      arrays.push(this.arrays[arrayName])
    })

    return arrays
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

  setInitData(data) {
    this.initData = data

    return this
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
