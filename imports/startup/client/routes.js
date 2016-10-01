// FlowRouter sample route
// FlowRouter.route('/blog/:postId', {
//     action: function(params, queryParams) {
//         console.log("Yeah! We are on the post:", params.postId);
//     }
// });

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('app', {content: 'home'});
  }
});

FlowRouter.notFound = {
  // Subscriptions registered here don't have Fast Render support.
  name: 'notFound',
  subscriptions: function() {},
  action: function() {
    BlazeLayout.render('app', {content: 'notFound'});
  }
};

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
