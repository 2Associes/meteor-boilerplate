import { Template } from 'meteor/templating';

import { Paragraphs } from '../api/paragraphs.js';

import './body.html';

Template.body.helpers({
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
