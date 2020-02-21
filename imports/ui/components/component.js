import { Template } from 'meteor/templating'

import './component.html'

export default class Component {
  static templateName = 'component'

  constructor() {
    this.listeners = {}
  }

  init(templateInstance) {
    this.instance = templateInstance
    this.instance.component = this

    return this
  }

  on(key, listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener should be a function')
    }

    if (!this.listeners[key]) {
      this.listeners[key] = []
    }

    this.listeners[key].push(listener)

    return this
  }

  off(key, listener) {
    if (this.listeners[key]) {
      const targetIndex = this.listeners.findIndex(registeredListener => registeredListener === listener)

      if (targetIndex >= 0) {
        this.listeners.splice(targetIndex, 1)
      }
    }

    return this
  }

  emit(key, ...args) {
    if (this.listeners[key]) {
      for (const listener of this.listeners[key]) {
        if (typeof listener === 'function') {
          listener.call(this, args)
        }
      }
    }

    return this
  }

  static createTemplateExtension(targetTemplateName) {
    if (!targetTemplateName) {
      throw new Error('targetTemplateName is required')
    }

    if (!(Template[targetTemplateName] instanceof Template)) {
      throw new Error(`${targetTemplateName} is not a template`)
    }

    Template[targetTemplateName].inheritsHelpersFrom(this.templateName)
    Template[targetTemplateName].inheritsEventsFrom(this.templateName)
    Template[targetTemplateName].inheritsHooksFrom(this.templateName)
  }
}

Template.component.onCreated(function () {
  // Init component automatically if provided
  if (this.data && this.data.component && typeof this.data.component.init === 'function') {
    this.data.component.init(this)
  }
})
