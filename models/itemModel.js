var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
  user: {type: String},
  name: {type: String},
  dateCreated: {type: Date},
  description: {type: String},
  estimatedLabor: {type: String},
  estimatedCost: {type: String},
  dateCompleted: {type: Date},
  image: {type: String}
});

module.exports = mongoose.model("Item", itemSchema);
