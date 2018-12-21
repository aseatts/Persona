const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  userName: { type: String },
  userPW: { type: String, default: "*placeholder*" },
  emailAddress: { type: String },
  createdDate: { type: Date, default: Date.now }
});
const userProfile = mongoose.model("userProfile", userProfileSchema);
module.exports = userProfile;
