const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: function () {
      return this.userType === 'Manufacturer';
    },
  },
});

const User = mongoose.model('Userclock', userSchema);

module.exports = User;
