const multer = require('multer');

const MIME_TYPE_ARRAY = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
  'video/mp4': 'mp4'
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/images')
  }, 
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-')
    const ext = MIME_TYPE_ARRAY[file.mimetype]
    cb(null, name.split('.' + ext)[0] + '_' + Date.now() + '_' + ext)
  }
})

module.exports = (multer({storage: storage }).single('file'));