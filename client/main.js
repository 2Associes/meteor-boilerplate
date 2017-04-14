import '../imports/startup';
import '../imports/startup/client';

import '../imports/ui/layouts/app';
import '../imports/ui/components/loading';
import '../imports/ui/components/header';
import '../imports/ui/components/language-switcher';
import '../imports/ui/components/footer';
import '../imports/ui/pages/not-found';
import '../imports/ui/pages/home';
import '../imports/ui/pages/admin/adminHome';

let getUserLanguage = function () {
  // Put here the logic for determining the user language
  return 'fr-CA';
};

Meteor.startup(function () {
  TAPi18n.setLanguage(getUserLanguage());
  $('html').attr('lang', getUserLanguage());
});
