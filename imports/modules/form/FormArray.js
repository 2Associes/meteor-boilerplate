import { ReactiveVar } from 'meteor/reactive-var'
import Form from './Form.js'

export default class FormArray {
  constructor(name) {
    this.name = name
    this.array = new ReactiveVar([])
  }

  createForm(index = this.array.get().length) {
    const form = new Form()
    const array = this.array.get()

    form.parentForm = this.parentForm
    array.splice(index, 0, form)
    this.array.set(array)

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
