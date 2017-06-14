import { Accounts } from 'meteor/accounts-base';

Accounts.emailTemplates.siteName = '2 Associés Meteor Boilerplate';
Accounts.emailTemplates.from = '2 Associés Meteor Boilerplate Admin <accounts@example.com>';

Accounts.urls.resetPassword = function (token) {
  return Meteor.absoluteUrl(`reset-password/${token}`);
};

Accounts.urls.verifyEmail = function (token) {
  return Meteor.absoluteUrl(`verify-email/${token}`);
};

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return '[2 Associés Meteor Boilerplate] Verify Your Email Address';
  },
  html(user, url) {
    SSR.compileTemplate('verifyEmail', Assets.getText('emails/verify-email.html'));
    return SSR.render('verifyEmail', {
      username: user.username,
      url: url,
    });
  },
};

Meteor.startup(() => {
  process.env.MAIL_URL = Meteor.settings.private.MAIL_URL;
});

Meteor.methods({

  sendEmail: function () {
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: 'hugues@2associes.com',
      from: 'hugues@2associes.com',
      subject: 'Example Email',
      text: 'The contents of our email in plain text.',
    });
  },
});
