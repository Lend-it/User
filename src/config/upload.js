import crypto from 'crypto';
import multer from 'multer';
import path from 'path';

const __dirname = path.resolve();

export default {
    upload(folder) {
        return {
            storage: multer.diskStorage({
                destination: path.resolve(__dirname, '..', '..', folder),
                filename: (request, file, cb) => {
                    const fileHash = crypto.randomBytes(16).toString('hex');
                    const filename = `${fileHash}-${file.originalname}`;

                    return cb(null, filename);
                }
            })
        }
    }
}