import { Paragraphs } from '../../api/paragraphs.js';

import { Meteor } from 'meteor/meteor';

import './home.html';

Template.home.helpers({
  // Sample for static array
  // paragraphs: [
  //   { text: 'This is paragraph 1' },
  //   { text: 'This is paragraph 2' },
  //   { text: 'This is paragraph 3' },
  // ],

  // Mongo Collection
  paragraphs() {
    return Paragraphs.find({});
  },
});

Template.home.events({});
