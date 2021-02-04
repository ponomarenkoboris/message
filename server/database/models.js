const { Schema, model } = require('mongoose');

const userSchema = Schema({
  firstname: String,
  lastname: String,
  userId: String,
  password: String,
  phoneNumber: Number,
  email: String,
  avatar_url: String,
  created: {
    type: Date,
    default: Date.now
  }
});
module.exports = model('User', userSchema);