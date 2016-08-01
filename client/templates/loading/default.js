// Template.registerHelper('getBody', function () {
//   return Session.get('splashLoaded') ? 'homeIndex' : 'loading';
// });

var message = '<p class="loading-message"></p>';
var spinner = '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>';

Template.loadingDefault.rendered = function () {
  // launch splash
  this.loading = window.pleaseWait({
    logo: '/images/2associes-logo.png',
    backgroundColor: '#3366ff',
    loadingHtml: message + spinner
  });

  // uncomment below to automatically remove loading
  var loading = this.loading;
  loading.finish();
  Session.set('splashLoaded', true);

  // uncomment below to manually remove loading for demo after 3 seconds
  // var loading = this.loading;
  // Meteor.setTimeout(function () {
  //   loading.finish();
  //   Session.set('splashLoaded', true);
  // }, 3000);
};

Template.loadingDefault.destroyed = function () {
  this.loading.finish();
};
