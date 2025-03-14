const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  date: Date,
  category: String,
  reminder: Boolean,
});

module.exports = mongoose.model("Event", EventSchema);
