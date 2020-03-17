import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'
import { _ } from 'meteor/underscore'
import { faker } from 'meteor/digilord:faker'
import { Paragraphs } from '../../api/paragraphs'

export function generateParagraphs() {
  // No paragraph in the database... Create some sample paragraphs...
  let timestamp = new Date().getTime()

  _.each(_.range(3), () => {
    const randomText = faker.lorem.paragraph()
    const randomI18nEnText = faker.lorem.paragraph()

    Paragraphs.insert({
      text: randomText,
      i18n: {
        'en-CA': {
          text: randomI18nEnText
        }
      },
      createdAt: new Date(timestamp)
    })

    timestamp += 1000 // ensure unique timestamp.
  })
}

export function generateUsers() {
  const users = [
    {
      name: 'Normal User',
      username: 'normaluser',
      email: 'normal@example.com',
      roles: []
    },
    {
      name: 'View-Secrets User',
      username: 'viewsecretsuser',
      email: 'view@example.com',
      roles: ['view-secrets']
    },
    {
      name: 'Manage-Users User',
      username: 'manageusersuser',
      email: 'manage@example.com',
      roles: ['manage-users']
    },
    {
      name: 'Admin User',
      username: 'adminuser',
      email: 'admin@example.com',
      roles: ['admin']
    }
  ]

  _.each(users, (user) => {
    const id = Accounts.createUser({
      email: user.email,
      password: '123456',
      username: user.username,
      profile: {
        name: user.name,
        isDummy: true
      }
    })

    if (user.roles.length > 0) {
      // Need _id of existing user record so this call must come
      // after `Accounts.createUser` or `Accounts.onCreate`
      Roles.addUsersToRoles(id, user.roles, 'default-group')
    }
  })
}
