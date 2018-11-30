const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Personav_010");

const ProfileQuestionSchema = new mongoose.Schema({
  value: { type: String },
  label: { type: String },
  isSocialSafe: { type: Boolean },
  isProfessionalSafe: { type: Boolean },
  isAllProfilesSafe: { type: Boolean },
  r_type: { type: String },
  createdDate: { type: Date, default: Date.now }
});
const ProfileQuestion = mongoose.model(
  "ProfileQuestion",
  ProfileQuestionSchema
);

module.exports = ProfileQuestion;
