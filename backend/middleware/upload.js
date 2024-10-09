const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2
require('dotenv').config()

cloudinary.config({
cloud_name :  `${process.env.CLOUD_NAME}`,
api_key :   `${process.env.CLOUDINARY_APIKEY}`,
api_secret:   `${process.env.CLOUDINARY_APISECRET}`,
})


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'product',
    allowed_format : ['png','jpg','jpeg']
  },
});

const upload = multer({ storage: storage })

module.exports = upload ;