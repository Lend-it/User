const crypto = require('crypto');
const multer = require('multer');
const path = require('path');

module.exports = {
  upload(folder) {
    return {
      storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', folder),
        filename: (request, file, cb) => {
          const fileHash = crypto.randomBytes(16).toString('hex');
          const filename = `${fileHash}-${file.originalname}`;

          return cb(null, filename);
        },
      }),
    };
  },
};
