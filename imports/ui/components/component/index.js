import { Template } from 'meteor/templating'

import './template.html'

/**
 * Component
 *
 * @prop {Component} component - The Component instance
 */
export default class Component {
  /**
   * Template name
   * Used when creating template extension
   */
  static templateName = 'component'

  constructor() {
    this.listeners = {}
  }

  /**
   * Init
   * Initializes the component once the template instance is created
   *
   * @param {Blaze.TemplateInstance} instance - The template instance
   */
  init(instance) {
    this.instance = instance
    this.instance.component = this

    return this
  }

  /**
   * On
   * Adds listener to component
   *
   * @param {string} type       - The event type
   * @param {function} listener - The listener function
   */
  on(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener should be a function')
    }

    if (!this.listeners[type]) {
      this.listeners[type] = []
    }

    this.listeners[type].push(listener)

    return this
  }

  /**
   * Off
   * Removes listener from the component
   *
   * @param {string} type       - The event type
   * @param {function} listener - The listener function
   */
  off(type, listener) {
    if (this.listeners[type]) {
      const targetIndex = this.listeners.findIndex(registeredListener => registeredListener === listener)

      if (targetIndex >= 0) {
        this.listeners.splice(targetIndex, 1)
      }
    }

    return this
  }

  /**
   * Emit
   * Triggers all component listeners registered with type
   *
   * @param {string} type - The event type
   * @param {...*} args   - The arguments passed to the listeners
   */
  emit(type, ...args) {
    if (this.listeners[type]) {
      for (const listener of this.listeners[type]) {
        if (typeof listener === 'function') {
          listener.call(this, ...args)
        }
      }
    }

    return this
  }

  /**
   * Create Template Extension
   * Make component's template inherit from another template
   *
   * @param {string} targetTemplateName - The name of the target template
   */
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
