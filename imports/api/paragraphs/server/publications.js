// import { TAPi18n } from 'meteor/tap:i18n';

import { Paragraphs } from '../paragraphs';

Meteor.publish('paragraphs', function paragraphsPublication() {
  return Paragraphs.find({});
});

if (Meteor.isServer) {
  console.log(Meteor.isServer);
}
