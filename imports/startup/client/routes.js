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

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
      BlazeLayout.render("app", {content: "notFound"});
    }
};
