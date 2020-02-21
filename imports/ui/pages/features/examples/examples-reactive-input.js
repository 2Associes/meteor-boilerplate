import { Template } from 'meteor/templating'

import Component from '../../../components/component'
import './examples-reactive-input.html'

export default class ExamplesReactiveInput extends Component {
  static templateName = 'examplesReactiveInput'
}

Component.createTemplateExtension('examplesReactiveInput')

Template.examplesReactiveInput.helpers({
  hasError() {
    // if (this.input.getError()) return 'is-invalid'
    return undefined
  }
})

Template.examplesReactiveInput.events({
  'input .js-input-text'(event, instance) {
    instance.component.emit('input', event.target.value)
  }
})
