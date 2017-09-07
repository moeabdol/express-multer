const multer = require('multer');
const User   = require('../models/user');

const index = (req, res) => {
  res.send('testing GET /users');
};

const create = (req, res) => {
};

module.exports = {
  index,
  create
};
