const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator')

const infoSchema = mongoose.Schema({
  aboutPage: { type: Object },
  homePage: { type: Object },
}, { timeStamps: { createdAt: 'created_at' } })

// infoSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Info', infoSchema);