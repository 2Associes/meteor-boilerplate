getUserLanguage = function () {
  // Put here the logic for determining the user language
  return "fr-CA";
};

Meteor.startup(function () {

  TAPi18n.setLanguage(getUserLanguage())

  $('html').attr('lang', getUserLanguage());
});
