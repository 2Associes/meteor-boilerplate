import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Check } from 'meteor/check';

export const Paragraphs = new TAPi18n.Collection('paragraphs', { base_language: "fr-CA" });

ParagraphSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  text: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

// Validate an object against the schema
obj = { _id: 'd9CRmppSNquKWZHdb', text: 'Validate an object against the schema', createdAt: new Date() };

// Validate the obj variable
check(obj, ParagraphSchema);
