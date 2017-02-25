import { Meteor } from 'meteor/meteor';
import { Paragraphs } from '../paragraphs.js';

TAPi18n.publish("paragraphs", function () {
  return Paragraphs.i18nFind();
});
