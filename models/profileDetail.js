const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileDetailSchema = new Schema({
  profileTypeId: { type: Object },
  userId: { type: String, default: "*placeholder*" },
  personaName: { type: String },
  companyName: { type: String },
  jobTitle: { type: String },
  linkedIn: { type: String },
  createdDate: { type: Date, default: Date.now }
});
const profileDetail = mongoose.model("ProfileDetails", profileDetailSchema);
module.exports = profileDetail;
