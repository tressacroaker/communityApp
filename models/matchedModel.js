var mongoose = require("mongoose");

var matchedSchema = new mongoose.Schema({

  projectId: {type: String},
  fundraiserId: {type: String},
  status: {type: String}
});

module.exports = mongoose.model("Matched", matchedSchema);
