const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  type: String,
  company: String,
  website: String,
  teamName: String,
  phone: String,
  projects: [{type: mongoose.Schema.Types.ObjectId, ref: "Projects"}],
  fundraiser: [{type: mongoose.Schema.Types.ObjectId, ref: "Fundraiser"}]
});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
