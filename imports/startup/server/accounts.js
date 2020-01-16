import { Meteor } from 'meteor/meteor'
import { ServiceConfiguration } from 'meteor/service-configuration'

// Set up login services
Meteor.startup(() => {
  // Add Facebook configuration entry

  ServiceConfiguration.configurations.update(
    { service: 'facebook' },
    {
      $set: {
        appId: 'XXXXXXXXXXXXXXXXXXXX',
        secret: 'XXXXXXXXXXXXXXXXXXXX'
      }
    },
    { upsert: true }
  )

  // Add GitHub configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: 'github' },
    { $set: {
        clientId: 'XXXXXXXXXXXXXXXXXXXX',
        secret: 'XXXXXXXXXXXXXXXXXXXX'
      }
    },
    { upsert: true }
  )
  */

  // Add Google configuration entry
  // ServiceConfiguration.configurations.update(
  //   { service: 'google' },
  //   { $set: {
  //       clientId: 'XXXXXXXXXXXXXXXXXXXX',
  //       client_email: 'XXXXXXXXXXXXXXXXXXXX',
  //       secret: 'XXXXXXXXXXXXXXXXXXXX'
  //     }
  //   },
  //   { upsert: true }
  // )

  // Add Linkedin configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: 'linkedin' },
    { $set: {
        clientId: 'XXXXXXXXXXXXXXXXXXXX',
        secret: 'XXXXXXXXXXXXXXXXXXXX'
      }
    },
    { upsert: true }
  )
  */
})
