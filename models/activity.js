const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now }
}, { timestamps: true });



module.exports = mongoose.model('Activity', ActivitySchema);
