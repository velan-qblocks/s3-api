const router = require('express').Router();

const uploadFileToServer = require('../services/multerUpload');

const { uploadFileController, listFilesController } = require('../controllers/s3Controllers');

router.post('/upload', uploadFileToServer,uploadFileController);

router.get('/list-files/:folderName', listFilesController);

module.exports = router;
