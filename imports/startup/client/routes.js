// FlowRouter sample route
// FlowRouter.route('/blog/:postId', {
//     action: function(params, queryParams) {
//         console.log("Yeah! We are on the post:", params.postId);
//     }
// });

FlowRouter.route('/', {
  name: 'home',
  // Subscriptions registered here don't have Fast Render support.
  // subscriptions: function() {},
  action: function() {
    BlazeLayout.render('app', {header: "header", main: "home", footer: "footer"});
  }
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('app', {header: "header", main: "notFound", footer: "footer"});
  }
};

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin'
});

adminRoutes.route('/home', {
  name: 'adminHome',
  action: function() {
    if (!Meteor.userId()) {
      Router.go('signIn');
    } else if (!Roles.userIsInRole(Meteor.userId(), ['admin'], 'default-group')) {
      BlazeLayout.render('app', {header: "header", main: "notFound", footer: "footer"});
    } else {
      BlazeLayout.render('app', {header: "header", main: "adminHome", footer: "footer"});
    }
  }
});

// Configure Accounts Templates default
AccountsTemplates.configure({
  defaultLayoutRegions: {
    header: 'header'
  }
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
