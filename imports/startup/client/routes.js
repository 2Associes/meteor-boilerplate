import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import { AccountsTemplates } from 'meteor/useraccounts:core'

import '../../ui/layouts/app'
import '../../ui/pages/not-found'
import '../../ui/components/loading'

import '../../ui/layouts/ui-controller'

const home = () => import('../../ui/pages/home')
const styleGuide = () => import('../../ui/pages/admin/style-guide')
const adminHome = () => import('../../ui/pages/admin/home')

// FlowRouter sample route
// FlowRouter.route('/blog/:postId', {
//     action: function(params, queryParams) {
//         console.log('Yeah! We are on the post:', params.postId)
//     }
// })

FlowRouter.route('/', {
  name: 'home',
  async action() {
    await home()
    BlazeLayout.render('uiController', {
      templates: {
        main: 'home'
      }
    })
  },
  classname: 'home'
})

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('uiController', {
      templates: {
        main: 'notFound'
      }
    })
  },
  classname: 'not-found'
}

const adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin'
})

function renderAdminLayout(uiData) {
  BlazeLayout.render('uiController', {
    templates: {
      ...uiData
    },
    options: {
      authenticated: true,
      roles: ['admin']
    }
  })
}

adminRoutes.route('/style-guide', {
  name: 'styleGuide',
  async action() {
    await styleGuide()
    renderAdminLayout({
      main: 'styleGuide'
    })
  },
  classname: 'admin-style-guide'
})

adminRoutes.route('/home', {
  name: 'adminHome',
  async action() {
    await adminHome()
    renderAdminLayout({
      main: 'adminHome'
    })
  },
  classname: 'admin-home'
})

// Configure Accounts Templates default
AccountsTemplates.configure({
  defaultTemplate: 'atForm',
  defaultLayoutRegions: {
    header: 'header'
  }
})

AccountsTemplates.configureRoute('changePwd')
AccountsTemplates.configureRoute('forgotPwd')
AccountsTemplates.configureRoute('resetPwd')
AccountsTemplates.configureRoute('signIn')
AccountsTemplates.configureRoute('signUp')
AccountsTemplates.configureRoute('verifyEmail')
