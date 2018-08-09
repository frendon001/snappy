const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateResponded: Date
});

module.exports = recipientSchema;
