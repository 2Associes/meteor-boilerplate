import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

import '../../ui/layouts/app'
import '../../ui/pages/not-found'
import '../../ui/components/loading'
import '../../ui/components/header'
import '../../ui/components/footer'

import '../../ui/components/ui-controller'
import '../../ui/controllers/user-controller'
import '../../ui/controllers/admin-controller'

const home = () => import('../../ui/pages/home')
const adminStyleGuide = () => import('../../ui/pages/admin/admin-style-guide')
const adminHome = () => import('../../ui/pages/admin/admin-home')
const featuresReactiveForm = () => import('../../ui/pages/features/features-reactive-form')

// FlowRouter sample route
// FlowRouter.route('/blog/:postId', {
//     action: function(params, queryParams) {
//         console.log('Yeah! We are on the post:', params.postId)
//     }
// })

FlowRouter.route('/', {
  name: 'home',
  // Subscriptions registered here don't have Fast Render support.
  // subscriptions: function() {},
  async action() {
    await home()
    BlazeLayout.render('uiController', {
      default: {
        template: 'app',
        header: 'header',
        main: 'home',
        footer: 'footer'
      }
    })
  },
  classname: 'home'
})

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('uiController', {
      default: {
        template: 'app',
        header: 'header',
        main: 'notFound',
        footer: 'footer'
      }
    })
  },
  classname: 'not-found'
}

const adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin'
})

adminRoutes.route('/style-guide', {
  name: 'adminStyleGuide',
  async action() {
    await adminStyleGuide()
    BlazeLayout.render('uiController', {
      default: {
        template: 'app',
        header: 'header',
        main: 'atForm',
        state: 'signIn',
        footer: 'footer'
      },
      loggedIn: {
        main: 'notFound'
      },
      isInRole: [
        {
          roles: ['admin'],
          main: 'adminStyleGuide'
        }
      ]
    })
  },
  classname: 'admin-style-guide'
})

adminRoutes.route('/home', {
  name: 'adminHome',
  async action() {
    await adminHome()
    BlazeLayout.render('uiController', {
      default: {
        template: 'app',
        header: 'header',
        main: 'atForm',
        state: 'signIn',
        footer: 'footer'
      },
      loggedIn: {
        main: 'notFound'
      },
      isInRole: [
        {
          roles: ['admin'],
          main: 'adminHome'
        }
      ]
    })
  },
  classname: 'admin-home'
})

const features = adminRoutes.group({
  prefix: '/features',
  name: 'features'
})

features.route('/reactive-form', {
  name: 'features-reactive-form',
  async action() {
    await featuresReactiveForm()
    BlazeLayout.render('uiController', {
      default: {
        template: 'app',
        header: 'header',
        main: 'atForm',
        state: 'signIn',
        footer: 'footer'
      },
      loggedIn: {
        main: 'notFound'
      },
      isInRole: [
        {
          roles: ['admin'],
          main: 'featuresReactiveForm'
        }
      ]
    })
  },
  classname: 'features features-reactive-form'
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
