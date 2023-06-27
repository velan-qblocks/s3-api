const { uploadFileToS3, s3 } = require('../services/s3Upload');

// api to upload file to s3 bucket

const uploadFileController = async (req, res) => {
   try {
      const { folderName } = req.body;
      const { file } = req;

      const result = await uploadFileToS3(folderName, file);

      res.status(200).json({
         message: 'File uploaded successfully!',
         result,
      });
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: 'Something went wrong!',
      });
   }
};

// api to list all files in s3 bucket

const listFilesController = async (req, res) => {
   const folderName = req.params.folderName;

   const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Prefix: `${folderName}/`,
   };

   s3.listObjectsV2(params, (err, data) => {
      if (err) {
         console.error(err);
         res.status(500).json({ error: 'Failed to retrieve file list.' });
      } else {
         const fileList = data.Contents.map((item) => item.Key);
         res.json({ files: fileList });
      }
   });
};

module.exports = { uploadFileController, listFilesController };

