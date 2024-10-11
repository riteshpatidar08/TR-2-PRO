const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config()
console.log(process.env.CLOUDINARY_CLOUD_NAME)

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  
  api_key: process.env.CLOUDINARY_API_KEY,       
  api_secret: process.env.CLOUDINARY_API_SECRET,  
});

// Configure Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',           
    format: async (req, file) => 'png', 
    public_id: (req, file) => 'computed-filename-' + Date.now(),
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
