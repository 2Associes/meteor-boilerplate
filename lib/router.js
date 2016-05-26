Router.configure({
  layoutTemplate    : 'layoutsDefault',
  notFoundTemplate  : '404notFound',
  loadingTemplate   : 'loadingDefault'
});

Router.route("/", {
  name : "homeIndex"
});

Router.route("/404", {
  name : "404notFound"
});
