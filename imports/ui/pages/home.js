import { Template } from 'meteor/templating'
import { TAPi18n } from 'meteor/tap:i18n'
import { Paragraphs } from '../../api/paragraphs/paragraphs.js'
import setPageTitle from '../../modules/setPageTitle'

import './home.html'

Template.home.onCreated(function () {
  setPageTitle('home')

  // Subscriptions
  TAPi18n.subscribe('paragraphs')
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
  }
})

Template.home.events({})
