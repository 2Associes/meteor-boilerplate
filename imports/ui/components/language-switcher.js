import { Meteor } from 'meteor/meteor';

import './language-switcher.html';

Template.languageSwitcher.helpers({

  nextLanguage() {
    const currentLanguageCode = TAPi18n.getLanguage();
    const obj = TAPi18n.getLanguages();
    const languages = [];

    for (const key in obj) {
      if(key !== "en") { // Exclude normal 'en' translation and keep 'en-CA'
        if(key === "fr-CA"){
          languages.push({ // Manually add the information for the 'fr-CA' translation
            code: key,
            labels: {
              name: "FR",
              en: "FR"
            }
          });
        } else {
          languages.push({
            code: key,
            labels: {
              name: "EN",
              en: "EN"
            }
          });
        }
      }
    }

    switch(currentLanguageCode) {
      case "fr-CA": return languages[0];
        break;
      case "en-CA": return languages[1];
        break;
      default: return languages[0];
    }

  }

});

Template.languageSwitcher.events({

  'click [data-action="change-language"]'(event, template) {
    event.preventDefault();
    let lang = $(event.target).attr('data-language');
    TAPi18n.setLanguage(lang);
    $('html').attr('lang', lang);
  }

})
