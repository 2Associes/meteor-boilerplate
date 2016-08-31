// FlowRouter sample route
// FlowRouter.route('/blog/:postId', {
//     action: function(params, queryParams) {
//         console.log("Yeah! We are on the post:", params.postId);
//     }
// });

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("app", {content: "home"});
  }
});

FlowRouter.route('/not-found', {
  action: function() {
    BlazeLayout.render("app", {content: "notFound"});
  }
});
