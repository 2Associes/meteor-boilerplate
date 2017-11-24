import { Meteor } from 'meteor/meteor'

const keys = {
  'authors.name'(value) {
    if (!value) {
      throw new Meteor.Error('empty', 'Name is empty')
    }
  },
  'foo'(value) {
    if (!value) {
      throw new Meteor.Error('empty', 'Name is empty')
    }
  }
}

export default {
  validate(key, ...args) {
    if (typeof key === 'object') {
      Object.keys(key).forEach((singleKey) => {
        this.validate(singleKey, key[singleKey], ...args)
      })
    } else if (typeof keys[key] === 'function') (keys[key])(...args)
  }
}
