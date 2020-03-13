import { Meteor } from 'meteor/meteor'
import AWS from 'aws-sdk'

const {
  AWSAccessKeyId,
  AWSSecretAccessKey
} = (Meteor.settings.private && Meteor.settings.private.amazonS3) || {}

const {
  bucket,
  region
} = (Meteor.settings.public && Meteor.settings.public.amazonS3) || {}

AWS.config.region = region
AWS.config.accessKeyId = AWSAccessKeyId
AWS.config.secretAccessKey = AWSSecretAccessKey

export function deleteObject(fileName) {
  return new Promise(function (resolve, reject) {
    const S3 = new AWS.S3()

    S3.deleteObject({
      Bucket: bucket,
      Key: fileName
    }, function (err) {
      if (err) reject(err)
      else {
        resolve()
      }
    })
  })
}

export function createPresignedPost(fileName, fileType, {
  expires = 60, // in seconds
  sizeRange = [0, 10000000] // 0 to 10 mb
} = {}) {
  return new Promise(function (resolve, reject) {
    const S3 = new AWS.S3()

    S3.createPresignedPost({
      Bucket: bucket,
      Expires: expires,
      Fields: {
        Key: fileName,
        ContentType: fileType,
        ACL: 'public-read'
      },
      Conditions: [
        ['content-length-range'].concat(sizeRange)
      ]
    }, function (err, data) {
      if (err) reject(err)
      else {
        resolve(data)
      }
    })
  })
}
