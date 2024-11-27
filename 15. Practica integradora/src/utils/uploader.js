import multer from "multer" // const multer = require('multer')
import dirname from 'path' // const {dirname} = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, `${dirname(__dirname)}/public/uploads`)
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const uploader = multer({
    storage
})

export default uploader;