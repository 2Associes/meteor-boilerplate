import '/imports/startup';
import '/imports/startup/client';

import '../imports/ui/layouts/app.js';
import '../imports/ui/components/loading.js';
import '../imports/ui/components/header.js';
import '../imports/ui/components/language-switcher.js';
import '../imports/ui/components/footer.js';
import '../imports/ui/pages/not-found.js';
import '../imports/ui/pages/home.js';
import '../imports/ui/pages/admin/adminHome.js';

let getUserLanguage = function () {
  // Put here the logic for determining the user language
  return "fr-CA";
};

Meteor.startup(function () {

  // Set default language on startup
  TAPi18n.setLanguage(getUserLanguage());

  // Add language lang attribute into html tag
  $('html').attr('lang', getUserLanguage());

});
