import { TAPi18n } from 'meteor/tap:i18n'
import { Paragraphs } from '../index'

TAPi18n.publish('paragraphs', function () {
  const data = Paragraphs.i18nFind()
  if (data) {
    return data
  }
  return this.ready()
})
