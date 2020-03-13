import { Meteor } from 'meteor/meteor'
import SimpleSchema from 'simpl-schema'

// See example: https://github.com/aldeed/meteor-collection2-core#attach-a-schema-to-meteorusers
export const UserSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  username: {
    type: String
  },
  emails: {
    type: Array,
    optional: true
  },
  'emails.$': {
    type: Object
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  'emails.$.verified': {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: Object,
    optional: true,
    blackbox: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: Object,
    optional: true,
    blackbox: true
  }
})

// Automatically validates documents when created or updated (aldeed:collection2-core)
Meteor.users.attachSchema(UserSchema)
