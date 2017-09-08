const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  avatar: { type: String }
});

module.exports = mongoose.model('User', UserSchema);
