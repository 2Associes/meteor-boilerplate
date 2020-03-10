import { Template } from 'meteor/templating'
import { setPageTitle } from '../../modules/head'

import './not-found.html'

Template.notFound.onCreated(function () {
  setPageTitle('notFound')
})

Template.notFound.helpers({})

Template.notFound.events({})
