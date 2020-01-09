import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { SSR } from 'meteor/meteorhacks:ssr'
import { Email } from 'meteor/email'

Meteor.startup(() => {
  // Uncomment if you use MAIL_URL in settings
  // process.env.MAIL_URL = Meteor.settings.private.MAIL_URL
})

Accounts.emailTemplates.siteName = '2 Associés Meteor Boilerplate'
Accounts.emailTemplates.from = '2 Associés Meteor Boilerplate Admin <accounts@example.com>'

Accounts.urls.resetPassword = function (token) {
  return Meteor.absoluteUrl(`reset-password/${token}`)
}

Accounts.urls.verifyEmail = function (token) {
  return Meteor.absoluteUrl(`verify-email/${token}`)
}

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return '[2 Associés Meteor Boilerplate] Verify Your Email Address'
  },
  html(user, url) {
    SSR.compileTemplate('verifyEmail', Assets.getText('emails/verify-email.html'))
    return SSR.render('verifyEmail', {
      username: user.username,
      url: url
    })
  }
}

Meteor.methods({

  sendEmail: function () {
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock()

    Email.send({
      to: 'to.email@example.com',
      from: 'from.email@example.com',
      subject: 'Example Email',
      text: 'The contents of our email in plain text.'
    })
  }
})
