// Options
AccountsTemplates.configure({
  defaultLayout: 'app',
  defaultLayoutRegions: {
    // nav: 'nav',
    // footer: 'footer',
  },
  defaultContentRegion: 'main',
  showForgotPasswordLink: true,
  overrideLoginErrors: true,
  enablePasswordChange: true,
  lowercaseUsername: true,

  //sendVerificationEmail: true,
  //enforceEmailVerification: true,
  //confirmPassword: true,
  //continuousValidation: false,
  //displayFormLabels: true,
  //forbidClientAccountCreation: true,
  //formValidationFeedback: true,
  //homeRoutePath: '/',
  //showAddRemoveServices: false,
  //showPlaceholders: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true,

  // Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');

AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 5,
    func: function(value){
      if (Meteor.isClient) {
          console.log("Validating username...");
          var self = this;
          Meteor.call("userExists", value, function(err, userExists){
              if (!userExists)
                  self.setSuccess();
              else
                  self.setError(userExists);
              self.setValidating(false);
          });
          return;
      }
      // Server
      return Meteor.call("userExists", value);
    },
  },
  {
    _id: 'email',
    type: 'email',
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email',
  },
  {
    _id: 'username_and_email',
    type: 'text',
    required: true,
    displayName: "Login",
  },
  pwd
]);
