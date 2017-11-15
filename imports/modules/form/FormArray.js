import { ReactiveVar } from 'meteor/reactive-var'
import Form from './Form.js'

export default class FormArray {
  constructor(name) {
    this.name = name
    this.array = new ReactiveVar([])
  }

  addForm(form, index = this.array.get().length) {
    const newForm = form
    const array = this.array.get()

    newForm.parentForm = this.parentForm
    array.splice(index, 0, newForm)
    this.array.set(array)
  }

  createForm(index) {
    const form = new Form()

    this.addForm(form, index)

    return form
  }

  removeForm(index) {
    const array = this.array.get()

    if (typeof index === 'object') {
      const objectIndex = array.indexOf(index)

      if (objectIndex >= 0) this.removeForm(objectIndex)
    } else {
      array.splice(index, 1)
      this.array.set(array)
    }
  }

  getForm(index) {
    return this.array.get()[index]
  }

  getArray() {
    return this.array.get()
  }

  getData() {
    return this.array.get().map(form => form.getData())
  }
}
