var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({

  projectName: {type: String},
  projectDescription: {type: String},
  dateCreated: {type: Date},
  estimatedLabor: {type: String},
  estimatedCost: {type: String},
  dropDate: {type: Date},
  image: {type: String},

  fundraiserId: {type: String},
  matchedId: {type: String},
  isMatched: {type: Boolean}

});

module.exports = mongoose.model("Project", projectSchema);
