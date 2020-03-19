import AWS = require('aws-sdk');
import { config } from './config/config';

const c = config.aws;

// Configure AWS credentials
if (c.aws_profile !== 'DEPLOYED') {
  AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: c.aws_profile});;
}
//Configure AWS
//var credentials = new AWS.SharedIniFileCredentials({profile: c.aws_profile});
//AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: c.aws_region,
  params: {Bucket: c.aws_media_bucket}
});


/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getGetSignedUrl( key: string ): string
{
  //const param = {Bucket: c.aws_media_bucket, key: key, Expires: 60*5};
  const signedUrlExpireSeconds = 60 * 5

    const url:string = s3.getSignedUrl('getObject', {
        Bucket: c.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds
      });

    return url;
}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl( key: string )
{
    const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('putObject', {
      Bucket: c.aws_media_bucket,
      Key: key,
      Expires: signedUrlExpireSeconds
    });

    return url;
}

/*
* To ensure that data is not corrupted traversing the network,
* use the Content-MD5 header. When you use this header,
* Amazon S3 checks the object against the provided MD5 value
* and, if they do not match, returns an error. Additionally,
* you can calculate the MD5 while putting an object to Amazon
* S3 and compare the returned ETag to the calculated MD5 value.
* */
// Upload the filtered image into the S3 bucket
export function uploadImage(key: string, image: Buffer) {
  return Promise.resolve( new Promise((res, rej) => {
      s3.putObject({
          Body: image,
          Bucket: c.aws_media_bucket,
          Key: key,
          ACL: 'private',
          ContentType: 'binary',
          ServerSideEncryption: 'AES256'
      }, function (err, data) {
          if (err) {
              return rej(err);
          }
          const eTag = data.ETag;
          return res({ eTag });
      });
  }));
}

// Get an image from the S3 bucket
export function getImage(key: string) {
  return Promise.resolve( new Promise((res, rej) => {
      s3.getObject({
          Bucket: c.aws_media_bucket,
          Key: key,
      }, function(err, data) {
          if (err) {
              return rej(err);
          }
          const contentType = data.ContentType;
          const image = data.Body;
          return res({ image, contentType });
      });
  }));
}