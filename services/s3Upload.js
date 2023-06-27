const AWS = require('aws-sdk');

// aws configs
AWS.config.update({
   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
   region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const uploadFileToS3 = (folderName, file) => {
   const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${folderName}/${file.name}}`,
      Body: file.buffer,
   };

   return s3.upload(params).promise();
};

module.exports = {s3, uploadFileToS3};
