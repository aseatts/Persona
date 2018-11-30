const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileTypeSchema = new Schema({
  profileTypeName: { type: String, required: true },
  img: { type: String },
  createdDate: { type: Date, default: Date.now }
});
const ProfileType = mongoose.model("ProfileTypes", profileTypeSchema);
module.exports = ProfileType;
