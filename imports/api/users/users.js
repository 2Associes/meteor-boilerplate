import SimpleSchema from 'simpl-schema'
import Schemas from '../schemas'

// See example: https://github.com/aldeed/meteor-collection2-core#attach-a-schema-to-meteorusers
Schemas.User = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
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
Meteor.users.attachSchema(Schemas.User)
