import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { renderMjml } from '../../utils/server/email'

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

Accounts.emailTemplates = {
  verifyEmail: {
    subject() {
      return '[2 Associés Meteor Boilerplate] Verify Your Email Address'
    },
    html(user, url) {
      return renderMjml(Assets.getText('emails/verify-email.mjml'), {
        username: user.username,
        url
      })
    }
  }
}
