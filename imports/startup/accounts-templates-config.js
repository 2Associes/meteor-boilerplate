import { AccountsTemplates } from 'meteor/useraccounts:core'

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

  sendVerificationEmail: true,
  enforceEmailVerification: true,
  // confirmPassword: true,
  // continuousValidation: false,
  // displayFormLabels: true,
  // forbidClientAccountCreation: true,
  // formValidationFeedback: true,
  // homeRoutePath: '/',
  // showAddRemoveServices: false,
  // showPlaceholders: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true

  // Privacy Policy and Terms of Use
  // privacyUrl: 'privacy',
  // termsUrl: 'terms-of-use'
})

const pwd = AccountsTemplates.removeField('password')
AccountsTemplates.removeField('email')

AccountsTemplates.addFields([
  {
    _id: 'username',
    type: 'text',
    displayName: 'username',
    placeholder: 'username',
    required: true,
    minLength: 5
  },
  {
    _id: 'email',
    type: 'email',
    required: true,
    displayName: 'email',
    placeholder: 'email',
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email'
  },
  {
    _id: 'username_and_email',
    type: 'text',
    required: true,
    displayName: 'usernameOrEmail',
    placeholder: 'usernameOrEmail'
  },
  pwd
])
