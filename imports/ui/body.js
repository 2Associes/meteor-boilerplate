import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  paragraphs: [
    { text: 'This is paragraph 1' },
    { text: 'This is paragraph 2' },
    { text: 'This is paragraph 3' },
  ],
});
