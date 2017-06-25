// import { TAPi18n } from 'meteor/tap:i18n';

import { Paragraphs } from '../paragraphs';

TAPi18n.publish('paragraphs', function () {
  return Paragraphs.i18nFind();
});
