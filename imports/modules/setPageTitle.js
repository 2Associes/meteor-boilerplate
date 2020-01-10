import { Session } from 'meteor/session'

export default function setPageTitle(string = '', { pattern, key } = {}) {
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
