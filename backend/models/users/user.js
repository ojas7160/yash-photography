const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, unique: true, dropDups: true },
  address: { type: String },
  gender: { type: String },
  email: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String,required: true },
  role: { type: String, default: 'customer' },
  pincode: { type: Number }
}, { timeStamps: { createdAt: 'created_at' } })

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);