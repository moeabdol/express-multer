const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/express-multer", {
  useMongoClient: true
}, (err) => {
  if (err) return console.log(err);
  console.log("Connected to database");
});

module.exports = mongoose;
