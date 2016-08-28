Router.configure({
  layoutTemplate    : 'app',
  notFoundTemplate  : 'notFound',
  loadingTemplate   : 'loadingDefault'
});

Router.route("/", {
  name : "homeIndex"
});

Router.route("/404", {
  name : "notFound"
});
