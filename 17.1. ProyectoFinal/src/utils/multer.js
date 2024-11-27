import multer from 'multer';
import dirname from 'path';

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, dirname(__dirname) + '/public/img')
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});

const uploader = multer({
    storage
});

export default uploader;