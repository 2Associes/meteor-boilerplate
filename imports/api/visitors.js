// global Meteor, TAPi18n, $

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Visitors = new Mongo.Collection('visitors');

VisitorSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  from: {
    type: String,
  },
  heardFrom: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

// Validate an object against the schema
obj = { _id: 'd9CRmppSNquKWZHdb', from: 'Napierville', heardFrom: 'Bouche à oreille', createdAt: new Date() };

// Validate the obj variable
check(obj, VisitorSchema);

Meteor.methods({

  'insertVisitor'(visitorFrom, visitorHeardFrom) {
    check(visitorFrom, String);
    check(visitorHeardFrom, String);

    Visitors.insert({
      visitorFrom,
      visitorHeardFrom,
      createdAt: new Date(), // current time
    });
  },
});
