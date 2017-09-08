const multer = require('multer');
const User   = require('../models/user');

const index = (req, res) => {
  res.send('testing GET /users');
};


const create = (req, res) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/images');
    },
    filename: (req, file, cb) => {
      if (!file.originalname.match(/\.(png)$/)) {
        let err = new Error();
        err.code = 'filetype';
        return cb(err);
      } else {
        cb(null, file.originalname + '-' + Date.now());
      }
    }
  });

  const upload = multer({ storage: storage }).single('avatar');

  upload(req, res, (err) => {
    if (err) {
      if (err.code === 'filetype') return res.status(400).json({
        message: 'Wrong file type!'
      });
      return res.status(500).json({ message: 'Oops! Something went wrong.', error: err });
    }

    if (!req.file) return res.status(400).json({
      message: 'No file was sent!'
    });

    console.log(req.file);

    res.status(200).json({ message: 'File uploaded successfully.' });

    // let newUser = new User({
    // });
  });
};

module.exports = {
  index,
  create
};
