
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  transporter: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
