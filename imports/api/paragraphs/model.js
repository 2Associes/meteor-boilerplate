import { TAPi18n } from 'meteor/tap:i18n'
import SimpleSchema from 'simpl-schema'

export const Paragraphs = new TAPi18n.Collection('paragraphs', { base_language: 'fr-CA' })

export const ParagraphSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  text: {
    type: String
  },
  createdAt: {
    type: Date
    // autoValue() {
    //   let date
    //   if (!this.isUpdate) date = new Date()
    //   return date
    // }
  }
})

// Automatically validates documents when created or updated (aldeed:collection2-core)
Paragraphs.attachSchema(ParagraphSchema)
