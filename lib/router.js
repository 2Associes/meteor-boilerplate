Router.configure({
  layoutTemplate    : 'app',
  notFoundTemplate  : 'notFound',
  loadingTemplate   : 'loading'
});

Router.route("/", {
  name : "homeIndex"
});

Router.route("/404", {
  name : "notFound"
});
