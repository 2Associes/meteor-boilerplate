import { Meteor } from 'meteor/meteor';

import '../imports/api/paragraphs.js';

// Define flemay:less-autoprefixer options
AUTOPREFIXER_OPTIONS = '{ "browsers": ["Chrome 36", "iOS 7"]}';

Meteor.startup(() => {
  // code to run on server at startup
});
