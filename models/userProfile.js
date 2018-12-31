const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  userName: { type: String },
  userPW: { type: String, default: "*placeholder*" },
  personaType: { type: String },
  profileTypeName: { type: String },
  personaName: { type: String },
  companyName: { type: String },
  jobTitle: { type: String },
  PersonaDetails: { type: String },
  linkedInUrl: { type: String },
  createdDate: { type: Date, default: Date.now }
});
const userProfile = mongoose.model("userProfile", userProfileSchema);
module.exports = userProfile;
