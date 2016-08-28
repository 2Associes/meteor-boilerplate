import { Meteor } from 'meteor/meteor';

import { Paragraphs } from '../../api/paragraphs.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (!Paragraphs.findOne()) {
    console.log('No paragraph in the database... Create some sample paragraphs...');

    const data = [
      {
        text: 'Velit aliqua non amet proident aliquip minim excepteur velit quis elit. Veniam ipsum ut et nulla incididunt reprehenderit veniam eiusmod laborum aute incididunt sit. Velit labore ex duis consequat elit qui sit exercitation anim et cillum.',
      },
      {
        text: 'Ut id minim deserunt sit non officia pariatur labore nisi nisi sint duis nostrud consectetur pariatur nulla. Occaecat consequat dolor ullamco excepteur in exercitation nostrud. Ad id ipsum consequat aute occaecat qui incididunt. Ad quis irure eu exercitation ut fugiat anim. Laboris cupidatat in fugiat consectetur excepteur ut consectetur duis Lorem nostrud ullamco ea non ullamco minim ex incididunt.',
      },
      {
        text: 'Nisi officia laboris nulla cupidatat sit incididunt incididunt anim eu Lorem nostrud minim qui qui veniam consequat veniam. Incididunt dolore ut velit ad magna non tempor reprehenderit. Proident exercitation proident magna velit ex enim fugiat occaecat est culpa ut ipsum dolor fugiat adipisicing excepteur eu.',
      },
    ]
  }
});
