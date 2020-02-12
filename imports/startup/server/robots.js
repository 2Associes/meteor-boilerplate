import { Meteor } from 'meteor/meteor'
import { robots } from 'meteor/gadicohen:robots-txt'

// Exclude entire domain from crawlers
if (
  process.env.NODE_ENV !== 'production' &&
  (Meteor.settings.public && Meteor.settings.public.env !== 'production')
) {
  robots.addLine('Disallow: /')
}
