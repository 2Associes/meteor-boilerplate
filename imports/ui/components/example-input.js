import { Template } from 'meteor/templating'

import Component from './component'
import './example-input.html'

/**
 * Example Input
 *
 * @prop {string} id    - The id used by the input and the label
 * @prop {string} label - The label text
 * @prop {string} value - The value of the input
 */
export default class ExampleInput extends Component { // Extend Component to have access to helpers
  static templateName = 'exampleInput'
}

Component.createTemplateExtension('exampleInput')

Template.exampleInput.events({
  'input .js-input-text'(event, instance) {
    instance.component.emit('input', event.target.value)
  }
})
