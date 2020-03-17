import { Template } from 'meteor/templating'

import Component from '../component'
import './template.html'

/**
 * Example Input
 *
 * @prop {string} id    - The id used by the input and the label
 * @prop {string} label - The label text
 * @prop {string} value - The value of the input
 */
export default class ExampleInput extends Component {
  static templateName = 'exampleInput'
}

Component.createTemplateExtension('exampleInput')

Template.exampleInput.events({
  'input .js-input-text'(event, instance) {
    instance.component.emit('input', event.target.value)
  }
})
