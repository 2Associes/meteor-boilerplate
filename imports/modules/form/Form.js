import { ReactiveVar } from 'meteor/reactive-var'
import FormInput from './FormInput.js'
import FormArray from './FormArray.js'

/**
 * Form class
 * Instanciates a form object that manages multiple FormInput objects and FormArray objects.
 */
export default class Form {
  constructor() {
    this.submited = new ReactiveVar(false)
    this.inputs = {}
    this.arrays = {}
  }

  /**
   * Add input
   * Pairs the provided FormInput object with the Form.
   * @param {FormInput} input - The input that will be paired.
   * @param {string} [name] - If provided will rename the input.
   */
  addInput(input, name) {
    const newInput = input

    if (name) newInput.name = name
    newInput.parentForm = this
    this.inputs[newInput.name] = newInput
  }

  /**
   * Create input(s)
   * Create new FormInput objects and pair them with the form.
   * @param {string|object|array} inputProps - The name or properties in an object of the new input.
   * Can create multiple inputs when using an array. See {@link FormInput} to read about the properties.
   */
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

  /**
   * Add array
   * Pairs the provided FormArray object with the Form.
   * @param {FormArray} input - The FormArray that will be paired.
   * @param {string} [name] - If provided will rename the FormArray.
   */
  addArray(array, name) {
    const newArray = array

    if (name) newArray.name = name
    newArray.parentForm = this
    this.arrays[newArray.name] = newArray
  }

  /**
   * Create array(s)
   * Create new FormArray objects and pair them with the form.
   * @param {string|object|array} names - The name ({string}) or names ({[string]}) of the new input.
   */
  createArray(names) {
    let array

    if (Array.isArray(names)) {
      names.forEach((name) => {
        this.createArray(name)
      })

      array = this.arrays
    } else {
      array = new FormArray(names)

      this.addArray(array, names)
    }

    return array
  }

  /**
   * Clear values
   * Sets all input values in the form to their default values.
   * See {@link FormInput.setToDefault}.
   */
  clearValues() {
    this.getInputs().forEach((input) => {
      input.setToDefault()
    })
    this.getArrays().forEach((array) => {
      array.getArray().forEach((form) => {
        form.clearValues()
      })
    })
  }

  /**
   * Get errors
   * Returns previously generated errors.
   * To generate errors use {@link Form.validateData} or {@link FormInput.validate}.
   * @param {object} [options] - {@link FormInput.getError} options
   * @param {boolean} [options.includeArrays] - Whether to include arrays errors or not
   */
  getErrors(options = {}) {
    const { includeArrays = true } = options
    let errors = this.getInputs().map(input => input.getError(options)).filter(error => error)
    if (includeArrays) {
      this.getArrays().forEach((array) => {
        array.getArray().forEach((form) => {
          if (form.getErrors()) errors = errors.concat(form.getErrors())
        })
      })
    }
    if (errors.length) return errors
    return null
  }

  /**
   * Clear errors
   * Clear errors on all inputs.
   * @param {boolean} includeArrays - Whether to include arrays errors or not
   */
  clearErrors(includeArrays = true) {
    this.getInputs().forEach((input) => {
      input.clearError()
      input.clearEdited()
    })
    if (includeArrays) {
      this.getArrays().forEach((array) => {
        array.getArray().forEach((form) => {
          form.clearErrors()
        })
      })
    }
  }

  /**
   * Get submited
   * Get submited property.
   */
  getSubmited() {
    return this.submited.get()
  }

  /**
   * Set submited
   * Set submited property.
   * @param {boolean} submited - The value.
   */
  setSubmited(submited) {
    this.submited.set(submited)
  }

  /**
   * Clear submited
   * Clears submited property.
   */
  clearSubmited() {
    this.submited.set(false)
  }

  /**
   * Get inputs
   * Returns all FormInput objects in an array.
   */
  getInputs() {
    const inputs = []

    Object.keys(this.inputs).forEach((inputName) => {
      inputs.push(this.inputs[inputName])
    })

    return inputs
  }

  /**
   * Revert inputs
   * Reverts all inputs to the value they had when they were initiated.
   * See {@link FormInput.initValue}.
   */
  revertInputs() {
    this.resetInputs(false)
    this.getInputs().forEach((input) => {
      input.revertValue()
    })
    this.getArrays().forEach((array) => {
      array.getArray().forEach((form) => {
        form.revertInputs()
      })
    })
  }

  /**
   * Reset inputs
   * Clears submited, errors and values of the form.
   * @param {boolean} [clear=true] - Whether to clear values or not.
   */
  resetInputs(clear = true) {
    this.clearSubmited()
    if (clear) this.clearValues()
    this.clearErrors()
    this.validateData({ forceAll: false })
  }

  /**
   * Get arrays
   * Returns all FormArrays objects in an array.
   */
  getArrays() {
    const arrays = []

    Object.keys(this.arrays).forEach((arrayName) => {
      arrays.push(this.arrays[arrayName])
    })

    return arrays
  }

  /**
   * Get data
   * Returns all form values in an object.
   * @param {object} [options] - The options object
   * @param {boolean} [options.modifiedOnly] - if true returns only the modified values
   */
  getData(options = {}) {
    const inputs = this.getInputs()
    const arrays = this.getArrays()
    const data = {}

    inputs.forEach((input) => {
      if (!options.modifiedOnly || input.isModified()) {
        data[input.name] = input.getValue()
      }
    })

    arrays.forEach((array) => {
      data[array.name] = array.getData(options)
    })

    return data
  }

  /**
   * Set init data
   * Sets temporary data to access it on init.
   * Useful when used with FormArray objects.
   * @param {*} data - The data.
   */
  setInitData(data) {
    this.initData = data

    return this
  }

  /**
   * Validate data
   * Validates all form input values. See {@link FormInput.validate} and {@link FormInput.forceValidate}
   * @param {object} [args] - The first parameter (when object) is {@link FormInput.validate} options
   * @param {function} [args] - The last parameter (when function) is a callback to which the errors are passed
   * @param {boolean} [options.forceAll] - Use {@link FormInput.forceValidate} instead of {@link FormInput.validate}
   * @param {boolean} [options.modifiedOnly] - if true validates only the modified values
   */
  validateData(...args) {
    let options = {}
    let callback

    if (typeof args[0] === 'object') options = args[0]
    if (typeof args[args.length - 1] === 'function') callback = args[args.length - 1]

    const { forceAll = true } = options

    this.getInputs().forEach((input) => {
      if (!options.modifiedOnly || input.isModified()) {
        if (forceAll) input.forceValidate(options)
        else input.validate(options)
      }
    })

    this.getArrays().forEach((array) => {
      array.getArray().forEach((form) => {
        form.validateData(args)
      })
    })

    if (typeof callback === 'function') callback(this.getErrors())
  }

  /**
   * Is modified
   * Returns true if at least one input is modified.
   */
  isModified() {
    const inputs = this.getInputs()
    const arrays = this.getArrays()

    for (const input of inputs) {
      if (input.isModified()) return true
    }

    for (const array of arrays) {
      for (const form of array) {
        if (form.isModified()) return true
      }
    }

    return false
  }

  /**
   * Update initial values
   * Changes the initial value of each input for their current value.
   * Useful when saving a form.
   */
  updateInitialValues() {
    const inputs = this.getInputs()
    const arrays = this.getArrays()

    for (const input of inputs) {
      input.initialValue.set(input.getValue())
    }

    for (const array of arrays) {
      for (const form of array.getArray()) {
        form.updateInitialValues()
      }
    }
  }
}
