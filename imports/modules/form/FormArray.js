import { ReactiveVar } from 'meteor/reactive-var'
import Form from './Form.js'

/**
 * FormArray class
 * Instanciates an object that manages array of forms.
 * Typicaly used within a parent form to manage multiple instances of similar subforms.
 * See {@link Form.createArray}.
 */
export default class FormArray {
  constructor(name) {
    this.name = name
    this.array = new ReactiveVar([])
  }

  /**
   * Add form
   * Pairs the provided Form object with the FormArray.
   * @param {Form} input - The form that will be paired.
   * @param {number} [index] - The index at which the form is inserted in the array. Defaults to the end.
   */
  addForm(form, index = this.array.get().length) {
    const newForm = form
    const array = this.array.get()

    newForm.parentForm = this.parentForm
    array.splice(index, 0, newForm)
    this.array.set(array)
  }

  /**
   * Create form
   * Creates new Form object and pairs them with the FormArray.
   * @param {number} [index] - The index at which the form is inserted in the array. Defaults to the end.
   * @returns the Form object so it can be chained.
   */
  createForm(index) {
    const form = new Form()

    this.addForm(form, index)

    return form
  }

  /**
   * Remove form
   * Removes the form provided from the array.
   * @param {number|Form} form - The target form or its index
   */
  removeForm(form) {
    const array = this.array.get()

    if (typeof form === 'object') {
      const objectIndex = array.indexOf(form)

      if (objectIndex >= 0) this.removeForm(objectIndex)
    } else {
      array.splice(form, 1)
      this.array.set(array)
    }
  }

  /**
   * Get form
   * Returns the form at the provided index in the array.
   * @param {number} index 
   */
  getForm(index) {
    return this.array.get()[index]
  }

  /**
   * Get array
   * Returns the reactive array of forms.
   */
  getArray() {
    return this.array.get()
  }

  /**
   * Get data
   * Returns all forms' data.
   */
  getData() {
    return this.array.get().map(form => form.getData())
  }
}
