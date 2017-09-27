import { Paragraphs } from '../paragraphs'

TAPi18n.publish('paragraphs', function () {
  const data = Paragraphs.i18nFind()
  if (data) {
    return data
  }
  return this.ready()
})
