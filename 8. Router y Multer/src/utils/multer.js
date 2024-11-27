import multer from 'multer';
import { dirname } from 'path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, `${__dirname}/public/img`);
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});

const uploader = multer({
    storage
});

export default uploader;  // Export default
