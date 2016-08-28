import '../imports/ui/body.js';

getUserLanguage = function () {
  // Put here the logic for determining the user language
  return "fr-CA";
};

Meteor.startup(function () {

  // Set default language on startup
  TAPi18n.setLanguage(getUserLanguage());

  // Add language lang attribute into html tag
  $('html').attr('lang', getUserLanguage());

});
