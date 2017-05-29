import './home.html';

Template.home.onCreated(() => {
  Session.set('whereAreYouFrom', '');
  Session.set('howDidYouHeardOf', '');
});

Template.home.helpers({});

Template.home.events({
  'click .where button'(event) {
    if ($(event.target).attr('class') === 'btn-primary') {
      $(event.target).removeClass('btn-primary');
      Session.set('whereAreYouFrom', '');
    } else {
      $('.where button').removeClass('btn-primary');
      Session.set('whereAreYouFrom', event.currentTarget.textContent);
      $(event.target).addClass('btn-primary');
    }
  },

  'click .how button'(event) {
    if ($(event.target).attr('class') === 'btn-primary') {
      $(event.target).removeClass('btn-primary');
      Session.set('howDidYouHeardOf', '');
    } else {
      $('.how button').removeClass('btn-primary');
      Session.set('howDidYouHeardOf', event.currentTarget.textContent);
      $(event.target).addClass('btn-primary');
    }
  },

  'submit form'(event, template) {
    event.preventDefault();

    const visitorFrom = Session.get('whereAreYouFrom');
    const visitorHeardFrom = Session.get('howDidYouHeardOf');

    if ( visitorFrom === '' || visitorHeardFrom === '' ) {
      alert('SVP répondre aux 2 questions.');
    } else {
      // Insert a visitor into the collection
      Meteor.call('insertVisitor', visitorFrom, visitorHeardFrom, function(error, result) {

        if (!error) {
          $('input').attr('disabled','disabled');
          // Clear form
          $('button').removeClass('btn-primary');
          $('input').removeAttr('disabled');
          Session.set('whereAreYouFrom', '');
          Session.set('howDidYouHeardOf', '');
        } else {
          alert('Une erreur est survenue lors de l\'enregistrement! SVP rafraîchir la page et recommencer.');
        }
      });
    }
  },
});
