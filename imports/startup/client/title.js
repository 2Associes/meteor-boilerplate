import { Tracker } from 'meteor/tracker'
import { Session } from 'meteor/session'
import { TAPi18n } from 'meteor/tap:i18n'

Tracker.autorun(() => {
  const { string, options: { pattern = true, key = true } = {} } = Session.get('title')

  if (Session.get('languageReady')) {
    const title = key && string
      ? TAPi18n.__(`head.titles.${string}`)
      : string

    document.title = pattern
      ? TAPi18n.__('head.titlePattern', { title })
      : string
  }
})
