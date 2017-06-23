import { TAPi18n } from 'meteor/tap:i18n';
import { Paragraphs } from '../../api/paragraphs/paragraphs.js';

import './home.html';

Template.home.onCreated(() => {
  // Subscriptions
  TAPi18n.subscribe('paragraphs');
});

Template.home.helpers({
  // Sample for static array
  // paragraphs: [
  //   { text: 'This is paragraph 1' },
  //   { text: 'This is paragraph 2' },
  //   { text: 'This is paragraph 3' },
  // ],

  // Mongo Collection
  paragraphs() {
    return Paragraphs.find();
  },
});

Template.home.events({});
