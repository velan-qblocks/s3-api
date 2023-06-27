const multer = require('multer');

// multer configs
const storage = multer.memoryStorage({
   destination: function (req, file, callback) {
      callback(null, '');
   },
});

const uploadFileToServer = multer({ storage }).single('file');

module.exports = uploadFileToServer;
