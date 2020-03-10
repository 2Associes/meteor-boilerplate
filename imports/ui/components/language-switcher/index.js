import { Template } from 'meteor/templating'
import { TAPi18n } from 'meteor/tap:i18n'
import { T9n } from 'meteor/softwarerero:accounts-t9n'

import './template.html'

Template.languageSwitcher.helpers({

  nextLanguage() {
    const currentLanguageCode = TAPi18n.getLanguage()
    const obj = TAPi18n.getLanguages()
    const languages = []

    for (const key in obj) {
      if (key === 'fr-CA') {
        languages.push({ // Manually add the information for the 'fr-CA' translation
          code: key,
          labels: {
            name: 'FR',
            en: 'FR'
          }
        })
      } else if (key === 'en-CA') {
        languages.push({
          code: key,
          labels: {
            name: 'EN',
            en: 'EN'
          }
        })
      }
    }

    switch (currentLanguageCode) {
      case 'fr-CA': return languages[1]
      case 'en-CA': return languages[0]
      default: return languages[0]
    }
  }
})

Template.languageSwitcher.events({

  "click [data-action='change-language']"(event) {
    event.preventDefault()
    const lang = $(event.target).attr('data-language')
    TAPi18n.setLanguage(lang)
    T9n.setLanguage(lang)
  }
})
