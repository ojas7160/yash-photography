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

// module.exports = (multer({storage: storage }).single('file'));
module.exports = multer({ dest: 'temp/', limits: { fieldSize: 8 * 1024 * 1024 } }).single(
  'file'
);


// const fs = require('fs');
// const AWS = require('aws-sdk');

// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// });

// const fileName = 'contacts.csv';

// const uploadFile = () => {
//   fs.readFile(fileName, (err, data) => {
//      if (err) throw err;
//      const params = {
//          Bucket: 'yashpictures', // pass your bucket name
//          Key: 'gallery/contacts.csv', // file will be saved as testBucket/contacts.csv
//          Body: JSON.stringify(data, null, 2)
//      };
//      s3.upload(params, function(s3Err, data) {
//          if (s3Err) throw s3Err
//          console.log(`File uploaded successfully at ${data.Location}`)
//      });
//   });
// };

// uploadFile();