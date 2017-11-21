import { TAPi18n } from 'meteor/tap:i18n'
import { Paragraphs } from '../../api/paragraphs/paragraphs.js'
import Form from '../../modules/form/Form.js'

import './home.html'

import '../components/input-text.js'

Template.home.onCreated(function () {
  // Subscriptions
  TAPi18n.subscribe('paragraphs')

  this.form = new Form()

  this.form.createInput([{
    name: 'foo',
    key: 'foo'
  }])
})

Template.home.helpers({
  // Sample for static array
  // paragraphs: [
  //   { text: 'This is paragraph 1' },
  //   { text: 'This is paragraph 2' },
  //   { text: 'This is paragraph 3' },
  // ],

  // Mongo Collection
  paragraphs() {
    return Paragraphs.find()
  },
  inputs: () => Template.instance().form.inputs
})

Template.home.events({})
