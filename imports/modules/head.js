import { Tracker } from 'meteor/tracker'
import { Session } from 'meteor/session'
import { TAPi18n } from 'meteor/tap:i18n'

Session.set({
  title: {
    string: 'meteor-boilplate',
    options: {
      pattern: false,
      key: true
    }
  }
})

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

export function setPageTitle(string = '', { pattern, key } = {}) {
  Session.set({
    title: {
      string,
      options: {
        pattern,
        key
      }
    }
  })
}
