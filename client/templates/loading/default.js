// Template.registerHelper('getBody', function () {
//   return Session.get('splashLoaded') ? 'homeIndex' : 'loading';
// });

Template.loadingDefault.rendered = function () {
  // launch splash
  this.loading = window.pleaseWait({
    logo: '/images/meteor-logo.png',
    backgroundColor: '#eee',
    loadingHtml: message + spinner
  });

  // uncomment below to automatically remove loading
  // var loading = this.loading;
  // loading.finish();
  // Session.set('splashLoaded', true);

  // manually remove loading for demo after 3 seconds, comment below and uncomment above when you're ready
  var loading = this.loading;
  Meteor.setTimeout(function () {
    loading.finish();
    Session.set('splashLoaded', true);
  }, 3000);
};

Template.loadingDefault.destroyed = function () {
  this.loading.finish();
};

var message = '<p class="loading-message"></p>';
var spinner = '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>';
