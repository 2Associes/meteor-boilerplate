import { Meteor } from 'meteor/meteor'
import { sitemaps } from 'meteor/gadicohen:sitemaps'

if (
  process.env.NODE_ENV === 'production' ||
  (Meteor.settings.public && Meteor.settings.public.env === 'production')
) {
  sitemaps.add('/sitemap.xml', () => {
    const pages = [
      { page: '/' },
      { page: '/sign-up' },
      { page: '/sign-in' }
    ]

    return pages
  })
}
