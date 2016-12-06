var mongoose = require("mongoose");

var fundraiserSchema = new mongoose.Schema({

  fundraiserName: {type: String},
  fundraiserDescription: {type: String},
  dateCreated: {type: Date},
  fundraiserPurpose: {type: String},
  dropDate: {type: Date},
  fundraiserGoal: {type: String},
  image: {type: String},

  projectId: {type: String},
  matchedId: {type: String}
});

module.exports = mongoose.model("Fundraiser", fundraiserSchema);
